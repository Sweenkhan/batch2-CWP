import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import { useNavigate } from "react-router-dom";


function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {

    e.preventDefault()

  }

  return (
    <div className='login'>
      <div className='container'>
        <div className='loginLeft'></div>
        <div className='loginRight'>

          <h2>Login</h2>
          <form method='post' onSubmit={handleSubmit}>
            <input
              required
              type='text'
              name='username'
              placeholder='Username'
              value={username}
              onChange={(e) => { setUsername(e.target.value) }}
            />  <br />

            <input
              required
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            /><br />
            <div className='btns'>
              <button type="submit" name='login'>Submit</button>
              <p>Don't have an account? <Link to="/sign-up" style={{ fontWeight: "700", }}>Create</Link></p>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login