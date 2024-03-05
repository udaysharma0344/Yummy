import React, { useState } from 'react'
import "./Header.css"


const Header = () => {
  const [btnStatus, setBtnStatus] = useState("Log In")


  const cahngeStatus = () => {
    (btnStatus == "Log In") ? setBtnStatus("Log Out") : setBtnStatus("Log In")
    console.log(btnStatus)
  }

  return (
    <div>
      <div id='header'>
        <img id='logo' src='download.png' alt='logo' />
        <div id='list'>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Contact us</li>
            <li>About</li>
          </ul>
          <button id='btn' onClick={cahngeStatus}>{btnStatus}</button>
        </div>
      </div>
    </div>
  )
}

export default Header