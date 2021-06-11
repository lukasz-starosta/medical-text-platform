import PostShort from '../PostShort/PostShort'
import React, { FC } from 'react'
import ShortPost from '../../shared/types/shortPost'

/*interface Props {
  postsList: Post[]
}*/

const PostsContainer = (props: { postsList: Array<ShortPost> }) => {
  console.log(typeof props.postsList + ' type of postList in ProfileBox')
  return (
    <div>
      {props.postsList &&
        props.postsList.map(post => {
          ;<PostShort title={post.title} description={post.description} date={post.date} />
        })}
    </div>
  )
}

export default PostsContainer
