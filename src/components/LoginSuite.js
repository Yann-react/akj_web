import React, { useState , useEffect} from "react";
import akj from "../assets/akj.jpg";
import "../styles/LoginSuite.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function LoginSuite(props) {
  const navigate = useNavigate()
  const {email} = useParams()
  const [password,setPassword]= useState('');
  const getPassword=(e)=>{
    setPassword(e.target.value)
    console.log(password)
  }
  
  const onLogin = () => {
    axios.post(`https://akj-k.herokuapp.com/api/Login`,
    {email:email,
    password:password
  })
    .then(res => {
        // console.log(res);
        console.log("dataddsds", res.data.email)
        sessionStorage.setItem("email", res.data.email)
        sessionStorage.setItem("password", res.data.password)
          //  storeToken(res.data)
          //  setHomeShow(true)
          navigate("/WalletClient/"+email)
         
        
    })
    .catch(error =>{
      // Alert.alert(
      //   "Connexion echoué",
      //   "Email ou mots de passe incorrect",
      //     [
      //       { text: "OK", onPress: () => console.log("OK Pressed") }
      //     ]
      //   );       
      console.log(error)           
})
  };
  
  return (
    <>
      <div className="box-gene">
        <img src={akj} height="37%" />
        <div className="box-second">
          <h1 className="title_co">Connexion</h1>
          <div className="log_logSuit">
            <div className="part-log for-sign">
              <span className="name-co">{email}</span>
              <input type="password" placeholder="Mot De Passe" name="password" onChange={getPassword}/>
              <button className="but-log" onClick={onLogin}>CONTINUER</button>
              <p className="text-log" onClick={()=>navigate('/ForgetPassword')}>Vous avez oublié votre mot de passe?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
