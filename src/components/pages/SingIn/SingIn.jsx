import React, {useState} from 'react'
import jwt from "jwt-decode";
import './SingIn.css'
import axios from 'axios';

export const User=() => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let URLPostLogin = 'https://fullmarket-provitional-backend.herokuapp.com/login'

  var formData = new FormData();

  const HandleSubmit = async (e) => {
    e.preventDefault()
    formData.append("email", email)
    formData.append("password", password)

    axios.post(URLPostLogin).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })
    };
  return (
  <form onSubmit={HandleSubmit} className="">  
    <div className="login-content">
      <div className='formulari'>
        <h2 className="title">Inicar Sesion</h2> 
        <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email" 
        id='email' 
        name='email' 
        placeholder='Correo Electronico' />
        <input 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password" 
        id='password' 
        name='password' 
        placeholder='password' 
        autoComplete='off' />
        <button  type='submit' className="btn">Iniciar Sesion </button>
        <a href="foo" >Forgot Password?</a>
        <div className="hr" /></div>
     <button className="btn-new-acount">Crear cuenta nueva</button>
    </div>
  </form>
  )
}
export default User
