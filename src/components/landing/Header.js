import React from 'react'
import logo from '../../Assets/img/effectual-logo.png'
import {BiLogInCircle,BiHome} from 'react-icons/bi'
import {FaBookReader} from 'react-icons/fa'
import {BsLightningCharge,BsListStars,BsStars,BsPhone} from 'react-icons/bs'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ld fixed-top  navbar-scrolled">
                <div className="container-fluid">
                    <a className="navbar-brand p-0" href="/">
                        <img src={logo} className="ms-lg-5" style={{height:"3rem"}} alt="logo" /> <span className='fs-3  ms-2 theme2-color'>Effectual RMS</span>
                    </a>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-5 align-items-lg-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home"><BiHome size={"1.2em"} className="mb-1"/> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about"><FaBookReader/> About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#highlights"><BsLightningCharge/> Highlights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features"><BsListStars/> Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#getStarted"><BsStars/>Get Started</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact"><BsPhone className='mb-1'/>Contact</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className='btn theme2-bg text-white px-4 mt-3 mt-md-0 text-nowrap' data-bs-toggle="modal" data-bs-target="#loginModal" >Login<BiLogInCircle className='fw-bold ms-1 fs-4'/></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}