import React from 'react'
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
  } from "@reach/combobox";
import logo from '../../../images/FMarket1.png'
import logo_name from '../../../images/FMarket2.png'
import Imag_Register from '../../../images/imgRegister.png'
import './Register.css'


function Resgiter() {
  return (
    <body>
      <div className='Name-compani'>
        <img className='logo' src={logo} alt='Logo' />
        <img className='Name' src={logo_name} alt='Name'/>
      </div>
      <div>
        <img className="Register" src={Imag_Register} alt='Login' /> 
        <div className="container-Resgiter">
          <div className="img">
          </div>
          <div className="Register-content">
            <div className='formulari-Register'>
                <h2 className="title-Register">REGISTRATE AQUI</h2>
                <input type="text" placeholder='Nombre Completo'/>
                <input type="text" placeholder='Alias' />
                <input type="email" placeholder='Correo Electronico'/>
                <input type="password" placeholder='Contraseña'/>    
                <Combobox className='combobox-Register' >
                    <ComboboxInput
                        placeholder="Departamento"/>
                    <ComboboxPopover>
                        <ComboboxList>
                        <ComboboxOption value='Quindio'>
                            <ComboboxOptionText />
                        </ComboboxOption>
                </ComboboxList>
                </ComboboxPopover>
                </Combobox>
                <Combobox >
                    <ComboboxInput
                        placeholder="Municipio"/>
                    <ComboboxPopover>
                        <ComboboxList>
                        <ComboboxOption value='Montenegro'>
                            <ComboboxOptionText />
                        </ComboboxOption>
                </ComboboxList>
                </ComboboxPopover>
                </Combobox>
                 <input type='text' placeholder='Dirección' />
                 <input type='text' placeholder='Télefono' />
                <a>Al hacer clic en "Regístrate" , Aceptas Nuestras Condiciones , la política de datos y la política de cookies. </a>
                <button className="btn">Registrate</button>
                <div className="hr" />
              </div>
               <a href="foo">Ya tienes una cuenta</a>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Resgiter