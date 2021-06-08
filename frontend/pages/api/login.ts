// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface ILoginForm {
  username: string
  password: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body: ILoginForm = JSON.parse(req.body)

  switch (req.method) {
    case 'POST':
      res.status(200).json({ name: body.username, password: body.password })

    default:
      res.status(405)
  }
}
