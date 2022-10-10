import React from "react";
import akj from "../assets/akj.jpg";
import "../styles/LoginSuite.css";
import { useNavigate } from "react-router-dom";
export default function LoginSuite() {
  const navigate = useNavigate()
  return (
    <>
      <div className="box-gene">
        <img src={akj} height="37%" />
        <div className="box-second">
          <h1 className="title_co">Connexion</h1>
          <div className="log_logSuit">
            <div className="part-log for-sign">
              <span className="name-co">Yann@gmail.com</span>
              <input type="password" placeholder="Mot De Passe" />
              <button className="but-log" onClick={()=>navigate("/WalletClient")}>CONTINUER</button>
              <p className="text-log">Vous avez oublié votre mot de passe?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
