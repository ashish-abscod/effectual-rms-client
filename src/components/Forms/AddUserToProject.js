import React from 'react'
import imgURL from '../../Assets/Effectual.jpg';
export default function AddUserToProject() {
  return (
    <div className='col-md-10 shadow pt-2 rounded'>

      <div className="d-flex justify-content-between mb-5">
        <h3 className='fs-5 theme-color mb-0'>Add Users to Project</h3>
          <input type="search" className="form-control w-50" id="inputPassword4" placeholder='Add User by searching...' />
      </div>

      <div className='w-100'>

        <div className='users-container overflow-auto' style={{height:"55vh"}}>

          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                <img src={imgURL} alt="" className='w-100 h-100 overflow-hidden rounded ' />
              </div>
              <div>
                <h3 className='fs-6 m-0'>Ashish Sharma</h3>
                <p className='fs-6 m-0'>dev.aeshtech@gmail.com</p>
              </div>
            </div>

            <div className='me-4'>
              <button type="button" className='btn btn-outline-danger'>Remove</button>
            </div>
          </div>

          <hr className='my-3 border-secondary border' />

          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                <img src={imgURL} alt="" className='w-100 h-100 overflow-hidden rounded ' />
              </div>
              <div>
                <h3 className='fs-6 m-0'>Ashish Sharma</h3>
                <p className='fs-6 m-0'>dev.aeshtech@gmail.com</p>
              </div>
            </div>

            <div className='me-4'>
              <button type="button" className='btn btn-outline-danger'>Remove</button>
            </div>
          </div>

          <hr className='my-3 border-secondary border' />

          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                <img src={imgURL} alt="" className='w-100 h-100 overflow-hidden rounded ' />
              </div>
              <div>
                <h3 className='fs-6 m-0'>Ashish Sharma</h3>
                <p className='fs-6 m-0'>dev.aeshtech@gmail.com</p>
              </div>
            </div>

            <div className='me-4'>
              <button type="button" className='btn btn-outline-danger'>Remove</button>
            </div>
          </div>
          <hr className='my-3 border-secondary border' />

          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                <img src={imgURL} alt="" className='w-100 h-100 overflow-hidden rounded ' />
              </div>
              <div>
                <h3 className='fs-6 m-0'>Ashish Sharma</h3>
                <p className='fs-6 m-0'>dev.aeshtech@gmail.com</p>
              </div>
            </div>

            <div className='me-4'>
              <button type="button" className='btn btn-outline-danger'>Remove</button>
            </div>
          </div>
          <hr className='my-3 border-secondary border' />

          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                <img src={imgURL} alt="" className='w-100 h-100 overflow-hidden rounded ' />
              </div>
              <div>
                <h3 className='fs-6 m-0'>Ashish Sharma</h3>
                <p className='fs-6 m-0'>dev.aeshtech@gmail.com</p>
              </div>
            </div>

            <div className='me-4'>
              <button type="button" className='btn btn-outline-danger'>Remove</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
