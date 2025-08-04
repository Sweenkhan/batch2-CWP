import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

function Blog() {


    const [blogs, setBlogs] = useState([])

    useEffect(() => {
     
        function fetchData(){
       axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
              console.log(res.data)
              setBlogs(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        }
       
        fetchData()

    }, [])



  return (
    <div>
      <h1>Blogs</h1>

     <div className='posts'>
     

     {
        blogs.map((blog) => {
            return(
                <div className='post'  key={blog.id} style={{marginBottom: "2rem"}}>

                   <h2><Link to={`/blog/${blog.id}`}> {blog.title} </Link>  </h2>
                   
                   <p>{blog.body}</p>
                </div>
            )
        })
     }

     
     </div>
    </div>
  )
}

export default Blog