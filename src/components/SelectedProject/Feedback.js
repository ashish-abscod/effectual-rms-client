import React from 'react'

export default function Feedback() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-12 mt-3'>
                <textarea rows="18" className='w-100 border border-primary rounded p-3' placeholder='Please provide your valuable feedback...'></textarea>
            </div>
            <div className='col-12 text-center mt-3'>
                <button type="submit" className='btn btn-lg btn-outline-success rounded-pill'>Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}
