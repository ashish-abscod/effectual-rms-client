import React from 'react'
import { GoLocation } from 'react-icons/go'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
export default function Contact() {
    return (
        <>
            <section className="ld" id="contact">
                <div className="container">
                    <div className="row gy-5 gx-lg-5">

                        <div className="col-lg-4 shadow p-5 pt-3">
                            <div className="info">
                                <h2 className='mb-3'>Contact Us</h2>
                                <p className='text-secondary fw-bold mb-4'>EFFECTUAL KNOWLEDGE SERVICES Pvt. Ltd.</p>
                                <div className="info-item d-flex"><GoLocation className='mb-1- fs-3 me-3 theme2-color' />
                                    <div>
                                        <h4>Location:</h4>
                                        <p className='text-secondary fw-bold'>SDF A-05, NSEZ, Noida-Dadri Road, Noida Phase II, Noida, UP 201305</p>
                                    </div>
                                </div>
                                <div className="info-item d-flex border-top border-3 pt-3 mt-2">
                                    <MdOutlineEmail className='mb-1 fs-4 me-3 theme2-color' />
                                    <div>
                                        <h4>Email:</h4>
                                        <p className='text-secondary fw-bold'> info@effectualservices.com</p>
                                    </div>
                                </div>
                                <div className="info-item d-flex border-top border-3 pt-3 mt-2">
                                    <BsPhone className='mb-1 fs-4 me-3 theme2-color' />
                                    <div><h4>Call:</h4>
                                        <p className='text-secondary fw-bold'>India:  +91-120-4522210, +91-120-4522211</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control p-3 text-secondary fw-bold" id="name" placeholder="Your Name" required="" />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control p-3 text-secondary fw-bold" name="email" id="email" placeholder="Your Email" required="" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control p-3 text-secondary fw-bold" name="subject" id="subject" placeholder="Subject" required="" />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control p-3 text-secondary fw-bold" rows={9} name="message" placeholder="Message" required=""></textarea>
                                </div>
                                <div className="my-3 d-none">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className='btn theme2-bg text-white px-5 py-2 mt-5'>Send Message<FiSend className='fw-bold ms-2' /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
