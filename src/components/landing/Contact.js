import React from 'react'
import { GoLocation } from 'react-icons/go'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi';

import axios from 'axios'
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function Contact() {

    const [body,setBody] = useState({
        name:"",email:"", subject:"",message:""
    });

    const[isLoading,setIsLoading] = useState(false);

    const contactUsHandler = async ()=>{
        try {
            setIsLoading(true);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/contactUs`,body);
            if(res?.data?.status === "success"){
                toast.success(res?.data?.msg);
            }else{
                toast.error(res?.data?.msg);
            }
        } catch (error) {
            toast.warning("Something went wrong.");
        }finally{
            setIsLoading(false);
        }
    }
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
                                        <input type="text" name="name" className="form-control p-3 text-secondary fw-bold"  placeholder="Your Name"
                                        onChange={(e)=>setBody({...body,name:e.target.value})} />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control p-3 text-secondary fw-bold" name="email" placeholder="Your Email"
                                        onChange={(e)=>setBody({...body,email:e.target.value})} />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control p-3 text-secondary fw-bold" name="subject" placeholder="Subject"
                                    onChange={(e)=>setBody({...body,subject:e.target.value})} />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control p-3 text-secondary fw-bold" rows={9} name="message" placeholder="Message" 
                                    onChange={(e)=>setBody({...body, message :e.target.value})}></textarea>
                                </div>
                                <div className="my-3 d-none">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <button type="button" className='btn theme2-bg text-white px-5 py-2 mt-5' disabled={isLoading} onClick={contactUsHandler}>Send Message<FiSend className='fw-bold ms-2' /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
