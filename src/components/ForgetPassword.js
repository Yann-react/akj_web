import React from 'react'
import akj from "../assets/akj.jpg";
import '../styles/ForgetPassword.css'
export default function ForgetPassword() {
  return (
    <>
    <div className="box-gene">
      <img src={akj} height="37%" />
      <div className="box-second">
        <h1 className="title_cos">Mot De Passe Oublié</h1>
        <div className="box-logF">
          <div className="part-log for-sign">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mot De Passe" />
            <button className="but-log" style={{marginTop:"50px"}}>CONTINUER</button>
          </div>
        </div>
      </div>
    </div>
  </>  )
}
