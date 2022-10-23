import React from 'react'
import '../styles/DetailComponent.css'
import { FaUser}from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function DetailComponent() {
  const navigate = useNavigate()
  const [code,setCode]=useState(0)
  const [nom,setNom]=useState('')
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
          setCode(res.data.adresse)
        })
        .catch(error => {
          if (error.response) {
            console.log('rror sur rsp');
          } else if (error.request) {
            console.log('error sur requet');
          }
        });
    };
    const verifierConnexion=()=>{
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
  
  
    useEffect(() => {
      // getToken()
      //   .then(res => {
      //     setEmail(res.email);
      //     console.log('Data response wallet: ', res.titre);
      //   })
      //   .catch(e => {
      //     console.log('Error Data ' + e);
      //   });
      getInfo();
      verifierConnexion();
    }, []);  return (

    <>
    <div className='box-gene'>
        <div className='part-wallet'>
            <div className='part-profils'>
            <div onClick={()=>navigate("/ViewDisconnect")}><FaUser icon="fa-regular fa-circle-user" size="1.5em" color='white' /></div>
            <span style={{color:"#ffff"}}>{nom}</span>
            </div>
            <div className='part-adress'>
            <h3>Code porte-feuille</h3>
            <span>{code}</span>
            </div>
        </div>
        </div>
    </>
  )
}
