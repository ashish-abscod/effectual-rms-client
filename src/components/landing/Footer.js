import React from 'react'
import logo from '../../Assets/img/effectual-logo.png'


export default function Footer() {
  return (
    <>
      <footer className='pb-3'>
        <div className="footer-top py-5 ld border-top border-bottom">
          <div className="container">
            <div className="row gy-4 justify-content-around">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="index.html" className="d-flex align-items-center text-decoration-none mb-4">
                  <img src={logo} alt="" width={60} />
                    <h2 className='ms-2'>Effectual RMS</h2>
                </a>
                <p className='text-secondary fw-bold'>
                Effectual’s report management system centrally manages all type of client projects along with the repository of search reports and communication. The platform sends notification to the stakeholders of a project whenever any new activity is processed.
                </p>
                <div className="social-links mt-3 d-flex justify-content-around">
                  <a href="#about" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a className="facebook"  href="/"><i className="bi bi-facebook"></i></a>
                  <a className="instagram" href="/"><i className="bi bi-instagram"></i></a>
                  <a className="linkedin" href="/"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 text-center text-md-start">
                <h4>Contact Us</h4>
                <p className='text-secondary fw-bold'> A108 Adam Street
                  <br/> SDF A-05, NSEZ, Noida-Dadri Road, Noida Phase II, Noida, UP 201305 <br/><br/>
                  <strong>Phone:</strong> India: +91-120-4522210, +91-120-4522211<br/> 
                  <strong>Email:</strong>info@effectualservices.com<br/>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
      <div className="copyright pt-4 text-center theme3-color">
        Copyright @ 2016 - 2022 <strong><span>Effecutal Knowledge Services</span></strong>. All Rights Reserved
      </div>
    </div>
      </footer>
</>
)
}
