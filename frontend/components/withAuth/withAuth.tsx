import React, { Component } from 'react'
import Router from 'next/router'
import { Spin } from 'antd'
import { TOKEN_KEY } from '../../constants/token'
import { HOME_PATH } from '../../constants/app_paths'
import axios from 'axios'
import { API_CHECK_PATH } from '../../constants/api_paths'

export default function withAuth(AuthComponent: any) {
  return class Authenticated extends Component {
    static async getInitialProps(ctx: any) {
      // Ensures material-ui renders the correct css prefixes server-side
      let userAgent
      if (process.browser) {
        userAgent = navigator.userAgent
      } else {
        userAgent = ctx.req.headers['user-agent']
      }

      // Check if Page has a `getInitialProps`; if so, call it.
      const pageProps = AuthComponent.getInitialProps && (await AuthComponent.getInitialProps(ctx))
      // Return props.
      return { ...pageProps, userAgent }
    }

    constructor(props: any) {
      super(props)
      this.state = {
        isLoading: true,
      }
    }

    async componentDidMount() {
      if (!localStorage.getItem(TOKEN_KEY)) {
        Router.push(HOME_PATH)
      } else {
        try {
          await axios.get(API_CHECK_PATH)
          this.setState({ isLoading: false })
        } catch {
          localStorage.removeItem(TOKEN_KEY)
          Router.push(HOME_PATH)
        }
      }
    }

    render() {
      return (
        <div>
          {(this.state as any).isLoading ? (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <AuthComponent {...this.props} />
          )}
        </div>
      )
    }
  }
}
