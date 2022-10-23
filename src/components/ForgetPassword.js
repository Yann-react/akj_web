import React from 'react'
import akj from "../assets/akj.jpg";
import '../styles/ForgetPassword.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function ForgetPassword() {
  const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
   const navigate = useNavigate()
    const onChangePassword=()=>{
      axios.post(`https://akj-k.herokuapp.com/api/forgetPassword`,
      {email:email,
      password:password
    })
      .then(res => {
          // console.log(res);
          console.log("dataddsds", res.data)
          navigate('/Login')
         alert("Mots de passe modifié avec success")
          
      })
      .catch(error =>{
        // Alert.alert(
        //   "Changement Mots De Passe",
        //   "l'Email n'existe pas",
        //     [
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ]
        //   );    
        alert ("l'Email n'existe pas")  
        console.log(error)          
  }) 
      }
  console.log(email,password)
  return (
    <>
    <div className="box-gene">
      <img src={akj} height="37%" />
      <div className="box-second">
        <h1 className="title_cos">Mot De Passe Oublié</h1>
        <div className="box-logF">
          <div className="part-log for-sign">
            <input type="email" placeholder="Email" name='email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Mot De Passe" name='password' onChange={(e)=>setPassword(e.target.value)} />
            <button className="but-log" style={{marginTop:"50px"}} onClick={onChangePassword}>CONTINUER</button>
          </div>
        </div>
      </div>
    </div>
  </>  )
}
