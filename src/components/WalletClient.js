import React from 'react'
import '../styles/WalletClient.css'
export default function WalletClient() {
  return (
    <>
    <div className='box-gene'>
        <div className='part-wallet'>
            <div className='part-profils'>
            <div className='rondP'></div>
            <span style={{color:"#ffff"}}>Yann</span>
            </div>
            <div className='part-point'>
            <h1>K 200</h1>
            <div className='address-wallet'>
                <div className='rondP'></div>
                <span>Adresse</span>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
