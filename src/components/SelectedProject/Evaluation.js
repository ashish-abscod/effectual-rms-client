import React from 'react'

export default function Evaluation() {
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 pt-2' >
        <div className="col">
          <div className="input-field">
            <input type="text" className="form-control" id="inputPassword4" required />
            <label>Modified Date:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>
        </div>
        <div className="col">
          <div className="input-field">
            <input type="text" className="form-control" id="inputPassword4" required />
            <label>Last Edited By:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>
        </div>
        <div className="col">
          <div className="input-field">
            <select class="form-select">
              <option value="X">X-Cateogry</option>
              <option value="Y">Y-Cateogry</option>
              <option value="A">A-Cateogry</option>
            </select>
            <label>X/Y/A:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>

        </div>
        <div className="col">
          <div className="input-field">
            <input type="text" className="form-control" id="inputPassword4" required />
            <label className='text-truncate d-inline-block' style={{ width: "65%" }}>Application of Search Result:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>
        </div>
      </div>

      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-4 col-md-6">
          <span className='fw-bold text-secondary'>Score Range Refrences : X (55-65) | Y(45-55) | Z (0-25) </span>
          <div className="input-field mt-3">
            <input type="text" className="form-control" id="inputPassword4" required />
            <label>Search Result Score:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>
          <div className="input-field">
            <input type="text" className="form-control" id="inputPassword4" required />
            <label>Claim Chart Score:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>
          <div className="input-field">
            <input type="text" className="form-control" id="inputPassword4" required />
            <label>Search History Score:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>
          <div className="input-field">
            <input type="text" className="form-control" id="inputPassword4" required />
            <label>Data Coverage:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>
          <div className="input-field">
            <input type="text" className="form-control" id="inputPassword4" disabled />
            <label>Total Sum:</label>
            <span className='d-none'>Error : Field Required</span>
          </div>
        </div>
        <div className="col-md-6">
          <textarea rows="11" className='w-100 border border-primary rounded p-3' placeholder='Write your comment here...'></textarea>
          <button type="button" className='btn btn-success w-100 rounded-pill mt-3'>Evaluate</button>
        </div>
      </div>
    </div>
  )
}
