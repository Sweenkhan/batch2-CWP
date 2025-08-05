import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogLayout() {
  return (
    <div >
      <div className='blog-layout-title' style={{marginBottom: "2rem"}}> 
        <h2>Blog Layout page</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia pariatur similique labore. Fugit, laborum neque perferendis eos necessitatibus rerum dolorem fugiat illo. Sit minus deleniti architecto libero quo aut aliquam!</p>
        
      </div>
      <div style={{backgroundColor: "grey", padding: "2rem", color: "white"}}>

        <Outlet />
      </div>

    </div>
  )
}

export default BlogLayout