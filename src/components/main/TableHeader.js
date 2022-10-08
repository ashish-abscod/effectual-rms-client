import React from "react";
import { CSVLink } from "react-csv";

export default function TableHeader({props}) {
    return (
        <>
            <div className='d-flex justify-content-between mt-2 px-3 py-1'>
                <div className="w-50">
                    <input type="search" placeholder="Quick Search" className="form-control me-3" onChange={(e) => props.setSearch(e.target.value)} />
                </div>
                <div>
                    <CSVLink data={props?.selectedProjects} filename={"Effectual-RMS-Projects.csv"} className="btn btn-success text-light me-3 px-4" type='button'>Bibliography</CSVLink>
                    <CSVLink data={props?.projects} filename={"Effectual-RMS-Projects.csv"} className="btn theme-bg text-light px-4" type='button'>Bibliography All</CSVLink>
                </div>
            </div>
        </>
    )
}
