import React from 'react'
import '../styles/ViewPayementEspece.css'
export default function ViewPayementEspece() {
  return (
<>
      <div className="box-gene">
        <div className="part-wallet">
          <div className="part-profils">
            <div className="rondP"></div>
            <span style={{ color: "#ffff" }}>Yann</span>
          </div>
          <div className="part-input">
            <input type="text" placeholder="Adresse du destinataire" />
            <input type="text" placeholder="Montant payé" />
            <button>Envoyer</button>
          </div>
        </div>
      </div>
    </> 
     )
}
