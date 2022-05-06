import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios";
import jwtDecode from "jwt-decode";
import Imag_login from "../../../images/imgLogin.png";
import logo from "../../../images/FMarket1.png";
import logo_name from "../../../images/FMarket2.png";
import './SingIn.css'

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var dataForm = new FormData();

  const HandleSubmit = async (e) => {
    dataForm.append("email", email);
    dataForm.append("password", password);
    e.preventDefault();
    console.log(dataForm);

    axios.post("https://fullmarket-provitional-backend.herokuapp.com/login",dataForm)
      .then((response) => {
        const token = response.data.token;
        const decoded = jwtDecode(token);
        console.log(decoded);
        console.log(token);
        window.localStorage.setItem("token", token)
        window.localStorage.setItem("uiduser", decoded.uid)
    //     if (dataForm === token  || (window.sessionStorage && window.sessionStorage.getItem('token') === token)) {
    //       alert("datos Correctos")
    // } else {
    //     alert("Datos incorectos");
    // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="Name-compani">
        <img className="logo" src={logo} alt="Logo" />
        <img className="Name" src={logo_name} alt="Name" />
      </div>
      <form onSubmit={HandleSubmit} className="">
        <img className="Login" src={Imag_login} alt="Login" />
        <div className="content-title">
          <h2 className="title">Iniciar Sesión</h2>
        </div>
        <div className="login-content">
          <div className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Correo Electronico"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
            ></input>
            <NavLink to="/LayoutCards">
            <button type="submit" className="btn">
              Iniciar Sesion{" "}
            </button></NavLink>
            <a href="foo">Forgot Password?</a>
            <div className="hr" />
            <button className="btn">Crear cuenta nueva</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SingIn;
