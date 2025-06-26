import React from 'react'
import { useState } from 'react'


function Greeting() {
    
    let [loggedIn, setLoggedIn] = useState(true)

 

return (
    <> 
    {/* turnary operator */}

    { (loggedIn) ? <button>loge out</button> :  <button>login</button>}

      <p> {(loggedIn) && "welcome" }</p>
    
</>
)
}

export default Greeting