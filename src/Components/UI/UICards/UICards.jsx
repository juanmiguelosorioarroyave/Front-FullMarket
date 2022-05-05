import React from "react";
import './UICards.css'
//import { NavLink } from "react-router-dom";
import { UIButtons } from "../UIButtons/UIButtons.jsx";

export const UICards = ({
  
  typeProduct,
  imgProduct,
  nameProduct,
  conditionProduct,
}) => {
  const onClick= () => {

    setInterval(function() {
        if (window.localStorage.getItem('uiduser') !== null
          && window.localStorage.getItem('uiduser')
        ) {
          localStorage.removeItem('uid');
          alert("si existe en localStorage!!");
          
        } else {
          alert("No esta logueado inicie sesion")
        }
    });
  }
  return (
    <>
      <div className="header-Card">
        <h1>{typeProduct}</h1>
        <div className="body-Card">
          <div className="img-Card">
            <img
              src={imgProduct}
              onClick={btnPrueba}
              className="img-Card"
              alt={nameProduct}
            ></img>
          </div>
          <h2>{nameProduct}</h2>
          <p>Estado: {conditionProduct}</p>
          <div className="apply-Product">
            {/* <NavLink to="/LogIn"> */}
              <UIButtons
                class
                Buttons="btn-Apply"
                nameButtons="Aplicar"
                onClick={onClick}
              ></UIButtons>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

function btnPrueba() {
  alert("Hola");
}
