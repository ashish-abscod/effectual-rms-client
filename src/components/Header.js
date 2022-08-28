import React from 'react'
import profile from '../Assets/Effectual.jpg';
export default function Header() {
  return (
    <>

      <nav className="navbar navbar-expand-lg fixed-top text-white theme-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#"><b>Effectual RMS</b></a>
          <button className="navbar-toggler rounded-circle overflow-hidden p-0" style={{width:"2em",height:"2em"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={profile} style={{width:"2em",height:"2em"}} title="Profile" alt="Profile"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Activites</a>
              </li>
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="/#">Password</a>
              </li>
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="/#" tabIndex="-1">Sign Out</a>
              </li>
            </ul>
            <div className="dropdown dropstart d-none d-lg-block">
              <span>Hey Ashish Sharma</span>
              <button className="btn rounded-circle overflow-hidden p-0 ms-1 dropdown-toggle" style={{width:"2em",height:"2em"}} type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={profile} style={{width:"2em",height:"2em"}} title="Profile" alt="Profile" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" style={{top:"30px",right:"15%"}}>
                <li><button className="dropdown-item" type="button">Profile</button></li>
                <li><button className="dropdown-item" type="button">Change Password</button></li>
                <li><button className="dropdown-item" type="button">Sign Out</button></li>
              </ul>
            </div>
          </div>
          </div>
      </nav>

    </>
  )
}