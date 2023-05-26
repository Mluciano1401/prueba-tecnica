//import { useState } from 'react'
import './Styles/App.css'

function Login() {
  
  return (
    <>
     <form>
        <h1>Login</h1>
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button>Login</button>
     </form>
    </>
  )
}

export default Login