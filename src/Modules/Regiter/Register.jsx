import { useState } from 'react';
import * as api from '../../Services/Controllerapi';
import '../../Styles/Form.css';
import  {useNavigate } from 'react-router-dom';

function Register() {
  const [valid, setValid] = useState({});
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
    const result = await api.Post('users',  valid);
    sessionStorage.setItem('token', result.data.session.token);      
    navigate('/list'); 
  }

  return (
    <>
     <form onSubmit={submit} noValidate={true} style={{height:'650px'}}>
        <h1>Register</h1>
        <label>Firstname</label>
        <input type="text" name="firstname"
        value={ valid.firstname || ""} onChange={ handleChange}/>
        <label>Lastname</label>
        <input type="text" name="lastname"
        value={ valid.lastname || ""} onChange={ handleChange}/>
        <label>Email</label>
        <input type="text" name="email"
        value={ valid.email || ""} onChange={ handleChange}/>
        <label>Company</label>
        <input type="text" name="default_company"
        value={ valid.default_company || ""} onChange={ handleChange}/>
        <label>Password</label>
        <input type="password" name="password"
        value={ valid.password|| ""} onChange={ handleChange}/>
        <label>Confirm password</label>
        <input type="password" name="verify_password"
        value={ valid.verify_password || ""} onChange={ handleChange}/>
        <button type="submit">Submit</button>
        <section>
          <a href='/'>Do you already have an account? log in</a>
        </section>
     </form>
    </>
  )
}

export default Register