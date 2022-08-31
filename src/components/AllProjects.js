import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom';
import TableHeader from './TableHeader';

export default function AllProjects() {
    const [search, setSearch] = useState("");
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    // const [pending, setPending] = useState(true);


    //fetching data from endpoint
    const getProjects = async () => {
        try {
            const response = await axios.get("https://mocki.io/v1/c26c9b3a-fe41-4910-b8c6-a1aa8d1f4c2a");
            setProjects(response.data);
            setFilteredProjects(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    //loading all project list once only
    useEffect(() => {
        getProjects();
    }, []);

    //filtering projects based on search key
    useEffect(() => {
        const filters = projects.filter(project => {
            return project.projectId?.toLowerCase().match(search.toLowerCase());
        })

        setFilteredProjects(filters);
    }, [projects, search])


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
            name: "Manager",
            selector: (row) => row.manager
        },
        {
            name: "Request Date",
            selector: (row) => row.requestDate
        },
        {
            name: "Status",
            selector: (row) => row.status
        }
    ]

    const customStyles = {
        rows: {
            style: {
                fontSize: '15px',
                fontWeight: "bolder",
                cursor: "pointer"
            }
        }
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <DataTable columns={columns} data={filteredProjects} pagination fixedHeader fixedHeaderScrollHeight='470px' selectableRows selectableRowsHighlight highlightOnHover subHeader
                    subHeaderComponent={<TableHeader setSearch={setSearch} />}
                    onRowClicked={(row) => navigate(`/project/${row.projectId}`)} striped customStyles={customStyles} responsive
                />

            </div>
        </>
    )
}
