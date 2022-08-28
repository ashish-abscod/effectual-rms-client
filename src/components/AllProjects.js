import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component'
import {useNavigate} from 'react-router-dom';

export default function AllProjects() {
    const [search, setSearch] = useState("");
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);


    //fetching data from endpoint
    const getProjects = async () => {
        try {
            const response = await axios.get("https://mocki.io/v1/cea1c346-43da-497e-a5fa-cc6695bb93fc");
            setProjects(response.data);
            setFilteredProjects(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    //loading all project list once only
    useEffect(() => {
        getProjects();
    },[]);

    //filtering projects based on search key
    useEffect(()=>{
        const filters = projects.filter(project => {
            return project.projectId?.toLowerCase().match(search.toLowerCase());
        })
     
        setFilteredProjects(filters);
    },[projects,search])

    
    const navigate = useNavigate();

    const columns = [
        {
            name: "Project Id",
            selector: (row) => row.projectId,
            sortable: true
        },
        {
            name: "Search Object",
            selector: (row) => row.searchObject,
            sortable: true
        },
        {
            name: "Type",
            selector: (row) => row.type,
            sortable: true
        },
        {
            name: "Requester",
            selector: (row) => row.requester
        },
        {
            name : "Manager",
            selector : (row) => row.manager 
        },
        {
            name : "Request Date",
            selector : (row) => row.requestDate 
        },
        {
            name : "Status",
            selector : (row) => row.status  
        },
        {
            name : "Details",
            cell : (row) => <button type="button" className='btn btn-outline-primary' onClick={() => navigate(`/project/${row.projectId}`)}>View</button>
        }
    ]

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <DataTable columns={columns} data={filteredProjects} pagination fixedHeader fixedHeaderScrollHeight='470px' selectableRows selectableRowsHighlight highlightOnHover subHeader
                    subHeaderComponent={<><input type="search" placeholder="Search here..." className="w-25 form-control me-3" value={search} onChange={(e) => setSearch(e.target.value)} /><button className="btn btn-success text-light" type='button'>Bibliography</button> <button className="btn theme-bg text-light" type='button'>Bibliography All</button> </>}
                />

            </div>
        </>
    )
}
