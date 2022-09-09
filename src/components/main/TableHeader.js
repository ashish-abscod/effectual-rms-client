import React from 'react'

export default function TableHeader(props) {
    return (
        <>
            <div className='d-flex justify-content-between mt-2'>
                <div>
                    <input type="search" placeholder="Quick Search Here..." className="form-control me-3" onChange={(e) => props.setSearch(e.target.value)} />
                </div>
                <div>
                    <button className="btn btn-success text-light me-3" type='button'>Bibliography</button>
                    <button className="btn theme-bg text-light" type='button'>Bibliography All</button>
                </div>
            </div>
        </>
    )
}
