import React from 'react'
import './SingIn.css'
import Imag_login from '../../../images/imgLogin.png'
import img_user from '../../../images/account.png'
import logo from '../../../images/FMarket1.png'
import logo_name from '../../../images/FMarket2.png'


const SingIn = () => {
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
          <div className="login-content">
            <div className='formulari'>
              <h2 className="title">Inicar Sesion</h2> 
                <input type="text" placeholder='Correo Electronico' />
                <input type="password" placeholder='password' />
              <button className="btn">Iniciar Sesion </button>
               <a href="foo">Forgot Password?</a>
               <div className="hr" />
              </div>
              <button className="btn-new-acount">Crear cuenta nueva</button>
          </div>
        </div>
      </div>
    </body>
  )
}

export default SingIn
