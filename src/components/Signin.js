import React from 'react'
import akj from '../assets/akj.jpg'
import '../styles/Signin.css'
export default function Signin() {
  return (
    <>
    <div className='box-gene'>
    <img src={akj} height='37%' />
    <div className='box-second'>
      <h1 className='title_co'>Inscription</h1>
      <div className='box-log log_sign'>
      <div className='part-log for-sign'>
       <input type="text" placeholder="Nom" />
       <input type="email" placeholder="Email" />
       <input type="password" placeholder="Mot De passe" />
       <button className='but-sign'>CONTINUEZ SUR GOOGLE</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
