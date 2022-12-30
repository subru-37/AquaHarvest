import React from 'react'
import { Link } from 'react-router-dom'
import "./onboarding.css"
import Navbar from "../../components/Navbar/Navbar"
import add from "../../images/add.png"
import user from "../../images/user.png"

const Onboarding = () => {
  return (
    <div className='onb-container'>
        <Navbar/>
        <div className='firstPara'></div>
        <div className='links'>
          <div className='LoadTank'>
            <img src={add} alt="" />
            <Link to="/Addfarm"><button>Load new tank</button></Link>
          </div>
          <div className='LoadTank'>
            <img src={user} alt="" />
            <p>New to fish farming?</p>
            <a href="https://en.wikipedia.org/wiki/Fish_farming">Check out details here</a>
          </div>
        </div>
    </div>
  )
}

export default Onboarding