import React from "react";
import "../styles/ViewDisconnect.css";
import { FaPowerOff, FaUser } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
export default function ViewDisconnect() {
  const navigate = useNavigate();
  const [nom, setNom] = useState('');
  const [titre, setTitre] = useState('');
  const {email} = useParams()
  const getInfo = () => {
    axios
      .post(`https://akj-k.herokuapp.com/api/getInfo`, {
        email: email,
      })
      .then(res => {
        // console.log(res);
        console.log(res.data);
        setNom(res.data.nom);
        setTitre(res.data.titre);
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
  };
  function verifierConnexion(){
    if((window.sessionStorage.getItem("email")!=null)&&(window.sessionStorage.getItem("password")!=null)){
        const email = window.sessionStorage.getItem("email")
        const password = window.sessionStorage.getItem("password")
    
        axios.post(`https://akj-k.herokuapp.com/api/Login`,
        {email:email,
        password:password
      }).then(function (response) {
             console.log(response.data);
             if(response.data.succes){
                 //Ok il est connecté, il peut rester
             }else{
                 //Il degage
                navigate('/');
             }
         })
         .catch(function (error) {
             console.log(error);
         })
         .then(function () {
         })  
    }else{
        //Deco
        navigate('/');
    }
}
const deconnecter=()=>{
  window.sessionStorage.removeItem('email');
  window.sessionStorage.removeItem('password');
  navigate('/');
}


  useEffect(() => {
    // getToken()
    //   .then(res => {
    //     setEmail(res.email);
    //     console.log('Data response wallet: ', res);
    //   })
    //   .catch(e => {
    //     console.log('Error Data ' + e);
    //   });
    getInfo();
    verifierConnexion();
  }, [email]);
  return (
    <>
      <div className="box-gene">
        <div className="part-deconnection">
          <div className="part-profil">
            <div>
              <FaUser
                icon="fa-regular fa-circle-user"
                size="2rem"
                color="white"
              />
            </div>
            <span>{nom}</span>
            <span>{titre}</span>
          </div>
          <div className="part-deco">
            <div onClick={deconnecter}>
              <FaPowerOff size="3.7rem" color="white" />
            </div>
            <span>Deconnection</span>
          </div>
        </div>
      </div>
    </>
  );
}
