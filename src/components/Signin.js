import axios from 'axios'
import React, { useEffect, useState } from 'react'
import akj from '../assets/akj.jpg'
import '../styles/Signin.css'
import { useNavigate } from 'react-router-dom'
export default function Signin() {
  const [nom,setNom] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [adresse, setAdresse] = useState(0);
  const [solde, setSolde] = useState(200);
  const [titre, setTitre] = useState('client');
  const navigate = useNavigate()


  const random = () => {
    const nbre = parseInt(Math.random() * 1000000);
    if (nbre.lenght < 6) {
      nbre = parseInt(Math.random() * 1000000);
    }
    setAdresse(nbre);
  };
  const onSignUp = () => {
    axios
      .post(`https://akj-k.herokuapp.com/api/signIn`, {
        email: email,
        nom: nom,
        solde: solde,
        titre: titre,
        password: password,
        adresse: adresse,
      })
      .then(res => {
        // console.log(res);
        // console.log(res.data)
        console.log(res.data);
        sessionStorage.setItem("email", res.data.email)
        sessionStorage.setItem("password", res.data.password)
        navigate('/WalletClient/'+email)
        // storeToken(res.data);
        // setHomeShow(true);
       
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
  };
  useEffect(()=>{
    random()
  },[])

  return (
    <>
    <div className='box-gene'>
    <img src={akj} height='37%' />
    <div className='box-second'>
      <h1 className='title_co'>Inscription</h1>
      <div className='box-log log_sign'>
      <div className='part-log for-sign'>
       <input type="text" placeholder="Nom" name='nom' onChange={(e)=> setNom(e.target.value)}/>
       <input type="email" placeholder="Email" name='email' onChange={(e)=> setEmail(e.target.value)} />
       <input type="password" placeholder="Mot De passe" onChange={(e)=> setPassword(e.target.value)}/>
       <button className='but-sign' onClick={onSignUp}>CONTINUEZ SUR GOOGLE</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
