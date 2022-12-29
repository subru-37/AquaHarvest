import React from 'react'
import LandingImg from "../../images/background.png"
import "./landing.css";
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className='container'>
        <h2 className='h2'>
            Aqua Harvest
        </h2>
        <div className='section2'>
            <button className='.button'>
                <Link style={{textDecoration: 'none'}}><h3 className='h3'>Getting Started</h3></Link>
            </button>
        </div>
    </div>
  )
}
