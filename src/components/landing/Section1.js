import React from 'react'
import hero_img from '../../Assets/img/hero_img.png';
import {HiArrowRight} from 'react-icons/hi'

export default function Section1() {
    return (
        <>
            <section id="home" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 className='theme3-color fw-bold mb-4'>Report Management System</h1>
                            <p className='theme2-color fs-4'>Effectual’s Report management system centrally manages all type of client projects along with the repository of search reports and communication. </p>
                            <div>
                                <div className="text-center text-lg-start">
                                    <button type="buttom" className='btn theme2-bg text-white mt-3 px-4 fs-5 fw-bold' data-bs-toggle="modal" data-bs-target="#loginModal">Get Started <HiArrowRight size={"1.5em"}/> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img aos-init aos-animate" >
                            <img src={hero_img} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
