import React, {useState} from 'react'
import jwt from "jwt-decode";
import './SingIn.css'
import Imag_login from '../../../images/imgLogin.png'
import logo from '../../../images/FMarket1.png'
import logo_name from '../../../images/FMarket2.png'
import { useNavigate } from 'react-router-dom';

export const User=() => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('https://backend-fullmarket-py.herokuapp.com/login', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    try {
      const data = await res.json();
      console.log("🚀 ~ file: loginForm.jsx ~ line 25 ~ newLogin ~ data", data);
      let token = await data.token;
      console.log("🚀 ~ file: loginForm.jsx ~ line 26 ~ newLogin ~ token", token);
      
      localStorage.setItem("token", token);
      let decoded = await jwt(token);
      console.log("🚀🚀🚀~decoded CLAIMS",decoded);
    
      let stateUser = await decoded.claims.state;
      console.log(
        "🚀 ~ file: loginForm.jsx ~ line 33 ~ newLogin ~ stateUser", stateUser
      );

      localStorage.setItem("stateUser", stateUser);
      stateUser === "1" ? navigate("/") :
      alert("Datos Invalidos, inténtalo de nuevo");
      window.location.reload(true)
    }
    catch (error) {
      console.log(error);
      alert("Error ... Inesperado, intente de nuevo");
    }
    window.location.reload(true)
    setEmail("");
    setPassword("");

  };
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
          <form onSubmit={newLogin} className="">  
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
                  {/* <label htmlfor="floatingInput">Email ó Nombre de usuario</label> */}
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password" 
                    id='password' 
                    name='password' 
                    placeholder='password' 
                    autoComplete='off' />

                  <button  type='submit'
                  className="btn">Iniciar Sesion </button>
          
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
export default User
