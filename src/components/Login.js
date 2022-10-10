import React from 'react'
import akj from '../assets/akj.jpg'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  return (
    <>
    <div className='box-gene'>
    <img src={akj} height='37%' />
    <div className='box-second'>
      <h1 className='title_co'>Bienvenue</h1>
      <div className='box-logs'>
      <div className='part-log'>
       <input type="email" placeholder="Email:exemple@gmail.com" />
       <div className='part_but'>
       <button onClick={()=>navigate("/LoginSuite")}>CONTINUER</button>
       <span>OU</span>
       <button>CONTINUEZ SUR GOOGLE</button>
       </div>
        </div>
        <div className='part-option'>
        <p>Vous n'avez pas de compte ? <span onClick={()=>navigate("/Signin")}>Inscription</span></p>
        <p onClick={()=>navigate('/ForgetPassword')}>Vous avez oublié votre mot de passe?</p>
      </div>
        </div>
    </div>
    </div>
    </>
  )
}
