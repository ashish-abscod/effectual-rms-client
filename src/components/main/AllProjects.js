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
    const [selectedProjects, setSelectedProjects] = useState([]);
    const { setProjectId } = useContext(ProjectContext);
    const [loading, setLoading] = useState(false);
    
    //setProjectId null when user press back button to main panel, which helps to create new project instead to update selected project.
    setProjectId(null); 
    
    
    //fetching data from endpoint
    const getProjects = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:8080/projects");
            setProjects(response.data);
            setFilteredProjects(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    //loading all project list once only
    useEffect(() => {
        getProjects();
    }, []);

    //multiple fields search based on search key
    useEffect(() => {
        const filters = projects.filter(project => JSON.stringify(project)
            .toLowerCase()
            .indexOf(search.toLowerCase()) !== -1)

        setFilteredProjects(filters);
    }, [projects, search])

    const navigate = useNavigate();

    const getFormatedToday = (value) => {
        var date = new Date(value);
        var str = date.getFullYear() + "-" + (date.getMonth()<10 ?  `0${date.getMonth()+1}` : date.getMonth()+1) + "-" + (date.getDate()<10 ? `0${date.getDate()}` : date.getDate());
        return str;
    }

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
            // row?.requestedDate
            selector: (row) => getFormatedToday(row?.requestedDate) ,
            name: "Request Date",
            sortable: true
        },
        {
            selector: (row) => getFormatedToday(row?.deliveryDate),
            name: "Delievery Date",
            sortable: true
        },
        {
            name: "Status",
            selector: (row) => row.status === "0" ? <span>Interim Report</span> : row.status === "1" ? <span className="badge rounded-pill bg-warning text-dark" style={{ fontSize: "14px" }}>Progress</span> : row.status === "2" ? <span className="badge rounded-pill bg-success" style={{ fontSize: "14px" }}>Completed</span> : <span>Terminated</span>,
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
                    subHeaderComponent={<TableHeader props={{ setSearch, projects, selectedProjects }} />}
                    onRowClicked={(row) => { navigate(`/project`); setProjectId(row.projectId) }} striped customStyles={customStyles} responsive
                    onSelectedRowsChange={(selectedRows) => setSelectedProjects(selectedRows?.selectedRows)}
                    progressPending={loading}
                    progressComponent={
                        <div className='d-flex align-items-center p-5'>
                        <div className="spinner-border text-primary" style={{width: "3rem",height: "3rem"}} role="status">
                            <span className="sr-only mt-5"></span>
                        </div>
                        <h5 className='color text-secondary ms-3'>Loading Projects...</h5>
                        </div>
                    }
                />

            </div>
        </>
    )
}