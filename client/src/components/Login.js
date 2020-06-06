import React, { useState } from "react"
import axios from "axios"

const initData = { 
  username: "thom27",
  password: "secretword123",
}

function Login () {
    const [credentials, setCredentials] = useState(initData)
    const [status, setStatus] = useState()

    const handleOnChange = e => { setCredentials({...credentials, [e.target.name]: e.target.value }) }

    const handleOnSubmit = e => {
        e.preventDefault()
        const { username, password } = credentials
        axios.post('http://localhost:5000/api/auth/login', { username, password })
        .then(res => {
            console.log(res)
            setStatus(undefined)
            setCredentials(initData)
        })
        .catch(err => {
            console.log(err)
            setStatus('Wrong credentials')
        })
    }
    return (
      <form className="App" onSubmit={handleOnSubmit} name="login">
        <h2>Login</h2>
        {status && <h3>{status}</h3>}
        <label>
          Username
        </label>
        <input type="text" value={credentials.username} onChange={e => handleOnChange(e)} name="username"/>
        <label>
          Password
        </label>
        <input type="password" value={credentials.password} onChange={e => handleOnChange(e)} name="password" />
        <button>Submit</button>
      </form>
    )
}

export default Login