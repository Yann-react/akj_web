import React from 'react'

export default function ViewPayementPoint() {
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
          <input type="text" placeholder="Point à retiré" />
          <button>Envoyer</button>
        </div>
      </div>
    </div>
  </> 
  )
}
