import React from 'react'
import aboutImg from '../../Assets/img/about.jpg'

export default function About() {
  return (
    <>
      <section id="about" className="about ld">

        <div className="container">
          <div className="row gx-0">

            <h1 className='fw-bold text-center'>Who We Are</h1>
            <div className="col-lg-6">
              <div className="content h-100">
                <h3 className='theme3-color fw-bold'> Effectual Services is a well established and fast growing organization having experience and expertise in providing patent and legal services. </h3>
                <p className='pt-5 theme3-color fw-bold'>
                  Effectual Services is a leading Intellectual Property (IP) management advisory firm offering IP support solutions to Fortune 500 companies, law firms, research institutes and universities, and venture capital firms/PE firms.
                </p>

              </div>
            </div>

            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
              <img src={aboutImg} className="img-fluid" alt="" />
            </div>

          </div>
        </div>

      </section>
    </>
  )
}
