import React from 'react'
import imgURL from '../../Assets/Effectual.jpg';
export default function AddUser() {
  return (
    <div className='col-md-10 shadow p-3 rounded' style={{height:"59vh"}}>
      <header className='theme-bg text-center'>
        <h3 className='fs-3 text-white mb-0'>Add Users to Project</h3>
      </header>
      <div className='w-100 py-3'>
        <div className="input-field m-auto">
          <input type="search" className="form-control" id="inputPassword4" required />
          <label>Add Person by Name or Email:</label>
        </div>

        <div className='users-container overflow-auto' style={{height:"40vh"}}>

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
