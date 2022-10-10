import React from "react";
import "../styles/MenuLivreur.css";
export default function MenuLivreur() {
  return (
    <>
      <div className="box-gene">
        <div className="part-wallet">
          <div className="part-profils">
            <div className="rondP"></div>
            <span style={{ color: "#ffff" }}>Yann</span>
          </div>
          <div className="part-choose">
            <div className="payePoint">
              <div className="rondP"></div>
              <span>Payement par point</span>
            </div>
            <div className="payeEspece">
              <div className="rondP"></div>
              <span>Payement en espèce</span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
