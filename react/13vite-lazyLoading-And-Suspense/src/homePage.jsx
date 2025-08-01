import React, { useEffect, useState } from 'react'

function homePage() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
            console.log(res.data)
              setData(res.data)
        })
    }, [])

  return (
    <div>homePage
    {data}
    </div>
  )
}

export default homePage