import React, { useState } from 'react'
import Headers from './Headers'

function App() {

    const [data, setData] = useState({
        name: "sween",
        age: 23,
        email: "sween@gmail.com"
    })



  return (
    <div>

        <h2>this is our main page</h2>
        <Headers userData={data} />
    </div>
  )
}

export default App