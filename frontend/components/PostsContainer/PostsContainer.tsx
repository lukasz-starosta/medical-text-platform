import PostShort from '../PostShort/PostShort'
import React, { FC } from 'react'
import ShortPost from '../../shared/types/shortPost'

type PostList = {
  postsList: ShortPost[]
}

const PostsContainer = ({ postsList }: PostList) => {
  console.log(typeof postsList + ' type of postList in ProfileBox')
  return (
    <div>
      {postsList &&
        postsList.map(post => {
          ;<PostShort title={post.title} description={post.description} date={post.date} />
        })}
    </div>
  )
}

export default PostsContainer
