import React, { useState } from "react";
import akj from "../assets/akj.jpg";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const Togo = () => {
    navigate("LoginSuite/"+email);
  };
const getMail = (e)=>{
  setEmail(e.target.value)
}
console.log(email)
  return (
    <>
      <div className="box-gene">
        <img src={akj} height="37%" />
        <div className="box-second">
          <h1 className="title_co">Bienvenue</h1>
          <div className="box-logs">
            <div className="part-log">
              <input
                type="email"
                placeholder="Email:exemple@gmail.com"
                name="email"
                onChange={getMail}
              />
              <div className="part_but">
                <button onClick={Togo}>
                  CONTINUER
                </button>
                <span>OU</span>
                <button>CONTINUEZ SUR GOOGLE</button>
              </div>
            </div>
            <div className="part-option">
              <p>
                Vous n'avez pas de compte ?
                <span
                  onClick={() => navigate("/Signin")}
                  className="lien_inscrip"
                >
                  Inscription
                </span>
              </p>
              <p onClick={() => navigate("/ForgetPassword")}>
                Vous avez oublié votre mot de passe?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
