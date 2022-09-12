import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom';
import TableHeader from './TableHeader';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

export default function AllProjects() {
    const [search, setSearch] = useState("");
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [SelectedRows, setSelectedRows] = useState(false);

    const {setRefId} = useContext(ProjectContext);

    //fetching data from endpoint
    const getProjects = async () => {
        try {
            const response = await axios.get("http://localhost:8080/projects");
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
            return project.refId?.toLowerCase().match(search.toLowerCase());
        })

        setFilteredProjects(filters);
    }, [projects, search])


    const navigate = useNavigate();

    const columns = [
        {
            name: "Project Id",
            selector: (row) => row.refId,
            sortable: true
        },
        {
            name: "Search Object",
            selector: (row) => row.searchObject,
            sortable: true
        },
        {
            name: "Type",
            selector: (row) => row.projectName,
            sortable: true
        },
        {
            name: "Requester",
            selector: (row) => row.requesterName,
            sortable: true
        },
        {
            name: "Manager",
            selector: (row) => row.projectManager,
            sortable: true
        },
        {
            name: "Request Date",
            selector: (row) => row.requestedDate,
            sortable: true
        },
        {
            name: "Status",
            selector: (row) => row.status === 0 ? <span>Interim Report</span> : row.status === 1 ?  <span className="badge rounded-pill bg-warning text-dark" style={{fontSize:"14px"}}>Progress</span> : row.status === 2 ? <span className="badge rounded-pill bg-success" style={{fontSize:"14px"}}>Completed</span> : <span>Terminated</span>,
            sortable: true

        }
    ]

    const customStyles = {
        rows: {
            style: {
                fontSize: '15px',
                fontWeight: "bolder",
                cursor: "pointer"
            }
        },
        headCells: {
            style: {
                fontSize: '15px'
            },
        },
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <DataTable columns={columns} data={filteredProjects} pagination fixedHeader fixedHeaderScrollHeight='470px' selectableRows selectableRowsHighlight highlightOnHover subHeader
                    subHeaderComponent={<TableHeader setSearch={setSearch} />}
                    onRowClicked={(row) => { navigate(`/project`);setRefId(row.refId) }} striped customStyles={customStyles} responsive 
                    onSelectedRowsChange={(selectedRows) => {setSelectedRows(selectedRows)}}
                />

            </div>
        </>
    )
}
