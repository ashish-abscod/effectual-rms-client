import React from 'react'
import { BiLogInCircle } from 'react-icons/bi'
import projectList from '../../Assets/img/project-list.png'
export default function GetStarted() {
    return (
        <>
            <section className="ld bg-light" id="getStarted">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5">
                            <h1 className=''>Get Started</h1>
                            <p className='fw-bold theme3-color'>Effectual report delivery platform is made solely for our clients. The customer is at the center of our business's philosophy, operations & ideas.</p>
                            <div className="m-auto d-flex d-md-block justify-content-center">
                                <button type="button" className='btn theme2-bg text-white px-5 fw-bold'>Login <BiLogInCircle size={"1.5em"} /></button>
                            </div>
                        </div>
                        <div className="col-xl-7 pt-5 pt-lg-0 ">
                            <img src={projectList} alt="" className='w-75 d-block m-auto' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
