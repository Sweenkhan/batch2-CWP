import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
  return (
    <div>
        <h2>Blog Layout</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia pariatur similique labore. Fugit, laborum neque perferendis eos necessitatibus rerum dolorem fugiat illo. Sit minus deleniti architecto libero quo aut aliquam!</p>
        
        <Outlet />
    </div>
  )
}

export default BlogLayout