import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component'
import { useLocation, useNavigate } from 'react-router-dom';
import TableHeader from './TableHeader';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { UserContext } from '../contexts/UserContext';
import Moment from 'react-moment';

export default function AllProjects() {
    const [search, setSearch] = useState("");
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProjects, setSelectedProjects] = useState([]);
    const { setProjectId,isProjectAddOrUpdate} = useContext(ProjectContext);
    const { user} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    //setProjectId null when user press back button to main panel, 
    // which helps to create new project instead to update selected project.
    useEffect(() => {
        if (location.pathname === "/main") { setProjectId(null); };
    }, [location.pathname, setProjectId]);

    // settingProject id in state as well as local storage so that we can persist our 
    // state after refreshing in selected project components 
    const navigate = useNavigate();
    const setProjectIdHandler = (projectId) => {
        setProjectId(projectId);
        window.localStorage.setItem('projectId', `${projectId}`);
        navigate('/project');
    }


   
    //loading all project list once only
    useEffect(() => {
         //fetching data from endpoint
    const getProjects = async () => {
        try {
            setLoading(true);
            let response;
            if(user?.userData?.role === "Technical Expert" || user?.userData?.role === "Patent Expert") {
                response = await axios.get(`${process.env.REACT_APP_API_URL}/projects/getProjectsAssignedToUser/${user?.userData?._id}`);
            }
            else{
                response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
            }
            setProjects(response.data);
            setFilteredProjects(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

        getProjects();
    }, [isProjectAddOrUpdate, user?.userData]);


    //multiple fields search based on search key
    useEffect(() => {
        const filters = projects.filter(project => JSON.stringify(project)
            .toLowerCase()
            .indexOf(search.toLowerCase()) !== -1)

        setFilteredProjects(filters);
    }, [projects, search]);




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
            selector: (row) => <Moment format="DD-MM-YYYY">{row?.requestedDate}</Moment>,
            name: "Request Date",
            sortable: true
        },
        {
            selector: (row) => <Moment format="DD-MM-YYYY">{row?.deliveryDate}</Moment>,
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

    // const conditionalRowStyles = [
    //     {
    //         when: row => row?.status?.includes("2"),
    //         style: {
    //             backgroundColor: '#04ff1857',
    //             color: 'black'
    //         },
    //     }
    // ]
    
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <DataTable columns={columns} data={filteredProjects} pagination fixedHeader fixedHeaderScrollHeight='470px' selectableRows selectableRowsHighlight highlightOnHover subHeader
                    subHeaderComponent={<TableHeader props={{ setSearch, projects, selectedProjects }} />}
                    onRowClicked={(row) => setProjectIdHandler(row?.projectId)} striped customStyles={customStyles} responsive
                    onSelectedRowsChange={(selectedRows) => setSelectedProjects(selectedRows?.selectedRows)}
                    progressPending={loading}
                    progressComponent={
                        <div className='d-flex align-items-center p-5'>
                            <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
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
