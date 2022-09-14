import React from 'react'
import { CSVLink } from 'react-csv';

export default function TableHeader({props}) {
    return (
        <>
            <div className='d-flex justify-content-between mt-2'>
                <div>
                    <input type="search" placeholder="Quick Search Here..." className="form-control me-3" onChange={(e) => props.setSearch(e.target.value)} />
                </div>
                <div>
                    <CSVLink data={props?.selectedProjects} filename={"Effectual-RMS-Projects.csv"} className="btn btn-success text-light me-3" type='button'>Bibliography</CSVLink>
                    <CSVLink data={props?.projects} filename={"Effectual-RMS-Projects.csv"} className="btn theme-bg text-light" type='button'>Bibliography All</CSVLink>
                </div>
            </div>
        </>
    )
}
