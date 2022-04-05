import React, { useState ,useEffect } from 'react'
import logo from '../../../images/FMarket1.png'
import logo_name from '../../../images/FMarket2.png'
import Imag_Register from '../../../images/imgRegister.png'
import './Register.css'


function Resgiter() {

  const url = 'https://www.datos.gov.co/resource/xdk5-pm3f.json'
  const [Depart , setDepart] = useState(0)
  const fetchApi = async () => {
    const responde = await fetch(url)
    const responseDepart = await responde.json()
    setDepart(responseDepart)
  }
  useEffect(() => {
    fetchApi()

  }, [] )
  return (
    <body>
      <div className='Header-Resgiter'>
        <img className='logo-Register' src={logo} alt='Logo' />
        <img className='Name-Register' src={logo_name} alt='Name'/>
      </div>
      <div>
        <img className="Register" src={Imag_Register} alt='Login' /> 
        <div className="container-Resgiter">
          <div className="img-Register">
          </div>
          <div className="Register-content">
            <div className='formulari-Register'>
                <h2 className="title-Register">REGISTRATE AQUI</h2>
                <input type='text' placeholder='Nombre Completo'/>
                <input type='text' placeholder='Alias' />
                <input type='email' placeholder='Correo Electronico'/>
                <input type='password' placeholder='Contraseña'/>    
                <select>
                  { !Depart ? 'Cargando...'  :
                    Depart.map((Depart,index) => {
                      return <option key={index} value="Seleccion su departamento...">{Depart.departamento} </option>
                    })
                  }
                </select>
                <select>
                  { !Depart ? 'Cargando...' :
                  Depart.map((Depart,index) => {
                    return <option key={index} value='Seleccion su municipo...'>{Depart.municipio} </option>
                  })}
                </select> 
                 <input type='text' placeholder='Dirección' />
                 <input type='text' placeholder='Télefono' />
                <a>Al hacer clic en "Regístrate" , Aceptas Nuestras Condiciones , la política de datos y la política de cookies. </a>
                <button className="btn-Register">Registrate</button>
                <div className="hr" />
              </div>
               <a>Ya tienes una cuenta</a>
          </div>
        </div>
      </div>
    </body>
  )
}
export default Resgiter