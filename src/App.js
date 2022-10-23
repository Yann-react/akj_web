import React from "react";
import DetailComponent from "./components/DetailComponent";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import LoginSuite from "./components/LoginSuite";
import MenuLivreur from "./components/MenuLivreur";
import Signin from "./components/Signin";
import ViewDisconnect from "./components/ViewDisconnect";
import ViewPayementEspece from "./components/ViewPayementEspece";
import ViewPayementPoint from "./components/ViewPayementPoint";
import ViewScan from "./components/ViewScan";
import WalletClient from "./components/WalletClient";
import WelcomePage from "./components/WelcomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        {/* for client with navigation */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            
            <Route path="/Login" element={<Login />} />
            <Route path="/Login/LoginSuite/:email" element={<LoginSuite />} />
           
            <Route path="/Signin" element={<Signin />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/WalletClient/:email" element={<WalletClient />} />
            <Route path="/DetailComponent/:email" element={<DetailComponent />} />
            <Route path="/ViewDisconnect/:email" element={<ViewDisconnect />} />
            
          </Routes>
        </BrowserRouter>
        {/* for client  */}
        {/* debut */}
        {/* <WelcomePage /> */}
        {/* <Login /> */}
        {/* <Signin /> */}
        {/* <LoginSuite /> */}
        {/* <ForgetPassword /> */}
        {/* <WalletClient /> */}
        {/* <DetailComponent/> */}
        {/* fin */}
        {/* <MenuLivreur /> */}
        {/* <ViewPayementEspece /> */}
        {/* <ViewPayementPoint /> */}
        {/* <ViewDisconnect /> */}
        {/* <ViewScan /> */}
      </div>
    </>
  );
}
