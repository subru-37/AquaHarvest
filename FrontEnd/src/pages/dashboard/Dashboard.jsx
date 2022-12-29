import React from 'react'
import AlertCardMain from '../../components/alert-main/AlertCardMain'
import Navbar from '../../components/Navbar/Navbar'
import User from "../../images/user.jpg"
import "./dashboard.css"

const Dashboard = () => {
  return (
    <>
        <Navbar/>
        <div>
          <div className='left-div'>
            <div className='left-div-top'>
                <div className='user-info'>
                  <h3>Hello User</h3>
                  <img src={User} alt="profile" id='profile-pic'/>
                </div>
                <div className='tank-info'>
                  <div className='tanks'>
                    <h3>Tanks</h3><br/>
                    <h3>5</h3>
                  </div>
                  <div className='Variety-info'>
                    <h3>Varieties</h3><br/>
                    <h3>7</h3>
                  </div>
                </div>
              </div>  
                <div><AlertCardMain/></div>
              </div>
            <div></div>
        </div>
    </>
  )
}

export default Dashboard