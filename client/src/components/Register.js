import React, { useState } from "react"
import axios from "axios"

const initData = { 
  username: "thom27",
  password: "secretword123",
  repassword: "secretword123",
  department: "engineering"
}
function Register () {
  const [credentials, setCredentials] = useState(initData)
  const [status, setStatus] = useState()


  const handleOnChange = e => { setCredentials({...credentials, [e.target.name]: e.target.value }) }
    const handleOnSubmit = e => {
      e.preventDefault()
      const { username, password, repassword, department } = credentials
      if (password !== repassword) {
          return setStatus('Passwords do not match')
      }
      axios.post('http://localhost:5000/api/auth/register', { username, password, department })
      .then(res => {
        setStatus(undefined)
        setCredentials(initData)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        setStatus('Error handling request')
      })
    }
    return (
      <div>
        <form className="App" onSubmit={handleOnSubmit} name="register">
          <h2>Register</h2>
          {status && <h3>{status}</h3>}
          <label>
            Username
          </label>
          <input type="text" value={credentials.username} onChange={e => handleOnChange(e)} name="username"/>
          <label>
            Department
          </label>
          <input type="text" value={credentials.department} onChange={e => handleOnChange(e)} name="department"/>
          <label>
            Password
          </label>
          <input type="password" value={credentials.password} onChange={e => handleOnChange(e)} name="password" />
          <label>
            Re-enter Password
          </label>
          <input type="password" value={credentials.repassword} onChange={e => handleOnChange(e)} name="repassword"/>
          <button>Submit</button>
        </form>
        <button>Already registered? Login here</button>
      </div>

    );
}

export default Register