//import { useState } from 'react'
import * as axios from 'axios'
import './Styles/App.css'

function Register() {

  axios({
    method: 'post',
    url: 'https://apidev.kanvas.dev/v2',
    data:{

    }
  });

  return (
    <>
     <form>
        <h1>Register</h1>
        <label>Firstname</label>
        <input type="text" />
        <label>Lastname</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Company</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <label>Confirm password</label>
        <input type="password" />
        <button>Register</button>
     </form>
    </>
  )
}

export default Register