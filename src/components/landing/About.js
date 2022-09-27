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
                <h3 className='theme3-color fw-bold'>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h3>
                <p className='pt-5 theme3-color fw-bold'>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
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
