import React, {useState} from 'react'
import './SingIn.css'
import axios from 'axios';

const User=() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var dataForm = new FormData();

  const HandleSubmit = async (e) => {
    dataForm.append('email', email)
    dataForm.append('password', password)

    console.log(dataForm);
    axios.post('https://fullmarket-provitional-backend.herokuapp.com/login', dataForm).then( (response => {
      console.log(response.data);
    })).catch( (err => {
      console.log(err);
    }))
    e.preventDefault()
    }

    return (
    <form onSubmit={HandleSubmit}>  
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Correo Electronico'></input>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='password'></input>
      <button type='submit' >Iniciar Sesion </button>
    </form>
  )
}

export default User;