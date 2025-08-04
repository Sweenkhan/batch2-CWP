import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function SingleBlog() {

  let params = useParams()

  const [singleBlogData, setSingleBlogData] = useState({})
  // console.log(params)

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts/" + params.Id)
      .then((res) => {
        console.log(res)
        setSingleBlogData(res.data)
      })
      
  }, [])


  return (
    <div>

      <h3>Single Post</h3>
      <div className="singlepost">
        <h4>{singleBlogData.title}</h4>
        <p>{singleBlogData.body}</p>
      </div>

    </div>
  )
}

export default SingleBlog