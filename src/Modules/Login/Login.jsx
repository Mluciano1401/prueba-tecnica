import { useState } from 'react';
import '../../Styles/Form.css';
import * as api from '../../Services/Controllerapi';
import  { useNavigate } from 'react-router-dom';

export function Login() {
  const [valid, setValid] = useState({});

  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValid(values => ({...values, [name]: value}))
  }

  const submit = (e) => {
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("error");
    }
    else{
      getData();
    }
  }

  const getData = async() => {
    const result = await api.Post('auth', valid, token); 
    sessionStorage.setItem('token', result.data.token); 
    navigate('/list');  
  }


  return (
    <>
     <form onSubmit={submit} noValidate={true}>
        <h1>Login</h1>
        <label>Email</label>
        <input type="text" name="email"
        value={valid.email || ""} onChange={handleChange} required/>
        <label>Password</label>
        <input type="password" name="password" 
        value={valid.password || ""} onChange={handleChange} required/>
        <button type="submit">Login</button>
        <section>
          <a></a>
        </section>
     </form>
    </>
  )
}
