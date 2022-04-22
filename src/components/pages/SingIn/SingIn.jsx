import React, { useState } from 'react'
import axios from 'axios'
import './SingIn.css'
import Imag_login from '../../../images/imgLogin.png'
import logo from '../../../images/FMarket1.png'
import logo_name from '../../../images/FMarket2.png'

export const Form_login=()=> {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  var formDataLogin = new FormData();

  const HandleSubmit=async (e) => {
    formDataLogin.append("email", email)
    formDataLogin.append("password", password);
      
    console.log(formDataLogin);
    axios.get('https://fullmarket-provitional-backend.herokuapp.com/login', formDataLogin, { 
    headers: {
      "content-type": "multipart/form-data",
    },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    });
    e.preventDefault()
  }
  return (
    <body>
      <div className='Name-compani'>
        <img className='logo' src={logo} alt='Logo' />
        <img className='Name' src={logo_name} alt='Name'/>
      </div>
      <div  >
        <img className="Login" src={Imag_login} alt='Login' />
        <div className="container">
          <div className="img">
          </div>
          <form onChange={HandleSubmit} className='Form_login'>  
              <div className="login-content">
                <div className='formulari'>
                  <h2 className="title">Inicar Sesion</h2> 
                    <input type="text" id='email' placeholder='Correo Electronico' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" id='password' placeholder='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button className="btn">Iniciar Sesion </button>
                  <a href="foo" >Forgot Password?</a>
                  <div className="hr" />
                  </div>
                  <button className="btn-new-acount">Crear cuenta nueva</button>
              </div>
            </form> 
        </div>
      </div>
    </body>
  )
}
export default Form_login
