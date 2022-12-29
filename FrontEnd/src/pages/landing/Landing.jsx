import React from 'react'
import LandingImg from "../../images/background.png"
import "./landing.css";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  return (
    <div className='container'>
        <h2 className='h2'>
            Aqua Harvest
        </h2>
        <div className='section2'>
          <Link to="/onboarding">
            <button className='.button'>
                <h3 className='h3'>Getting Started</h3>
            </button>
          </Link>
        </div>
    </div>
  )
}
