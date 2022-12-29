import React from 'react'
import { Link } from 'react-router-dom'
import "./onboarding.css"

const Onboarding = () => {
  return (
    <div className='onb-container'>
        <div className='firstPara'></div>
        <Link to="/addTank"><button>Load new tank</button></Link>
        <a href="https://en.wikipedia.org/wiki/Fish_farming">New to fish farming? Check out details here</a>
    </div>
  )
}

export default Onboarding