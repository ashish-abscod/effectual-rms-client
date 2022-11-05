import React from 'react'
import Highlight1 from '../../Assets/img/highlight1.jpeg'
import Highlight2 from '../../Assets/img/highlight2.jpeg'
import Highlight3 from '../../Assets/img/highlight3.jpeg'
import { FiDatabase } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineSecurity } from 'react-icons/md'
export default function Highlights() {
    return (
        <>
            <section className="ld highlights" id="highlights">
                <div className="container ld">
                    <div className="row">
                        <h1 className='theme3-color fw-bold m-auto text-center mb-3'>Our Highlights</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-lg-5 g-md-2">
                        <div className="col">
                            <div className="card shadow-sm border-0">
                                <img src={Highlight1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title theme3-color fw-bold"><FiDatabase /> Central Management</h4>
                                    <p className="card-text fs-5 theme3-color">Complete searchable repository of all the executed projects along with current status.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm border-0 h-100">
                                <img src={Highlight2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title theme3-color fw-bold"><HiOutlineMail /> Instant Email</h4>
                                    <p className="card-text fs-5 theme3-color">Get instant notification via email for any new updates. Visit the online portal & view updates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm border-0 h-100">
                                <img src={Highlight3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className="card-title theme3-color fw-bold"><MdOutlineSecurity /> Highly Secure</h4>
                                    <p className="card-text fs-5 theme3-color">Effectual RMS is a highly secure software system, which keeps your data integrity at high.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
