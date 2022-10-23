import React from 'react'
import '../styles/WalletClient.css'
import { FaUser, FaWallet}from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
export default function WalletClient() {
    const navigate = useNavigate()
    const [nom, setNom] = useState('');
    const [solde, setSolde] = useState(0);
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
            setSolde(res.data.solde);
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
        verifierConnexion()

      }, []);
  return (
    <>
    <div className='box-gene'>
        <div className='part-wallet'>
            <div className='part-profils'>
            <div onClick={()=>navigate("/ViewDisconnect/"+email)}><FaUser icon="fa-regular fa-circle-user" size="1.5em" color='white' /></div>
            <span style={{color:"#ffff"}}>{nom}</span>
            </div>
            <div className='part-point'>
            <h1>K {solde}</h1>
            <div className='address-wallet'>
                <div className='rondP' onClick={()=>navigate("/DetailComponent/"+email)}>
                    <FaWallet size="1.5rem" />
                    </div>
                <span>Adresse</span>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
