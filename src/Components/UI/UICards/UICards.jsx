import React from "react";
import './UICards.css'
import { useNavigate } from "react-router-dom";
import { UIButtons } from "../UIButtons/UIButtons.jsx";

export const UICards = ({
  
  typeProduct,
  imgProduct,
  nameProduct,
  conditionProduct,
}) => {
  const navigate = useNavigate();
  const VerifyCard= () => {

        if (window.localStorage.getItem('uiduser') !== null
          && window.localStorage.getItem('uiduser')
        ) {
          alert("si existe en localStorage!!"); 
        } 
        else {
          alert("No esta logueado inicie sesion");
          navigate("/LayoutCards")
        }
    ;
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
              <UIButtons
                class
                Buttons="btn-Apply"
                nameButtons="Aplicar"
                onClick={VerifyCard}
              ></UIButtons>
          </div>
        </div>
      </div>
    </>
  );
};

function btnPrueba() {
  alert("Hola");
}
