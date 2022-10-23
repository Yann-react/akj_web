import React from 'react'
import akj from '../assets/akj.jpg'
import '../styles/WelcomePage.css'
import { useNavigate } from 'react-router-dom'
import {FaArrowRight}from 'react-icons/fa'

export default function WelcomePage() {
const navigate = useNavigate()
 
  return (
    <>
   <div className='box-gene'>
          <img src={akj} height='50%' className='img-gene' />
          <div className="part-text">
            <h2 className='text-welcome'>FAITES VOS ACHATS TOUT EN VOUS FAISANT DE L’ARGENT</h2>
            <button className='but-welcome' onClick={()=>{navigate("/Login")}}> <span>COMMENCER</span> <FaArrowRight size="1rem" style={{marginLeft:"10px"}} /></button>
          </div>

        </div>

   
   
    </>
  )
}
