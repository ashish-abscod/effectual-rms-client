import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import axios from "axios"
import { BiDownload } from "react-icons/bi"
import Moment from 'react-moment';
import { FiUpload } from "react-icons/fi";
import ReportUpload from './ReportUpload';
import { UserContext } from '../contexts/UserContext';

export default function FileManger() {
    const { user } = useContext(UserContext);
    const [effectualReports, setEffectualReports] = useState([]);
    const [clientReports, setClientReports] = useState([]);
    const { setProjectId, projectId } = useContext(ProjectContext);

    useEffect(() => {
        if (!projectId) setProjectId(window?.localStorage?.getItem('projectId'));
    }, [projectId, setProjectId])

    useEffect(() => {
        const getEffectualReports = async () => {
            try {
                const info = await axios.get(`http://localhost:8080/commentFiles/${projectId}`)
                setEffectualReports(info?.data?.result);
            } catch (error) {
                console.log(error);
            }
        }
        getEffectualReports()
    }, [projectId])



    useEffect(() => {
        const getClientReports = async () => {
            try {
                const info = await axios.get(`http://localhost:8080/commentFiles/client/${projectId}`)
                setClientReports(info?.data?.result);
            } catch (error) {
                console.log(error);
            }
        }
        getClientReports();
    }, [projectId]);


    return (
        <>
            <div className='container'>
                <div className='row row-cols-md-2 pt-3 '>
                    <div className='mt-2'>
                        <h5 className='text-center theme-color fw-bold'>
                            Client Files
                        </h5>
                        <div style={{ height: "70vh" }} className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead className='table-dark'>
                                    <tr>

                                        <th>Uploaded By</th>
                                        <th>Uploaded On</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientReports?.map?.((item, a) =>
                                        item?.files?.map((url, b) =>
                                            <tr key={`${a}${b}`}>
                                                <td>{item.uploadedBy}</td>
                                                <td><Moment format="DD/MM/YYYY HH:mm a">{item.createdAt}</Moment></td>
                                                <td className='text-center'><a href={url} className="me-3 fw-bold lh-1"><BiDownload size={25} /></a></td>
                                            </tr>
                                        )
                                    )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <div className="d-flex justify-content-center align-items-center">
                            <h5 className='theme-color fw-bold d-inline-block'>
                                Effectual Files
                            </h5>
                            {user?.userData?.role === "Effectual Admin" ?
                                <button type="button" className='btn btn-primary mb-2 ms-3 btn-sm' data-bs-toggle="modal" data-bs-target="#reportUpload"><FiUpload /> Upload Report</button>
                                : ""
                            }
                        </div>
                        <div style={{ height: "70vh" }} className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead className='table-dark'>
                                    <tr>

                                        <th>Uploaded By</th>
                                        <th>Uploaded On</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {effectualReports?.map?.((item, a) =>
                                        item?.files?.map((url, b) =>
                                            <tr key={`${a}${b}`}>
                                                <td>{item.uploadedBy}</td>
                                                <td><Moment format="DD/MM/YYYY HH:mm a">{item.createdAt}</Moment></td>
                                                <td className='text-center'><a href={url} className="me-3 fw-bold lh-1"><BiDownload size={25} /></a></td>
                                            </tr>
                                        )
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {user?.userData?.role === "Effectual Admin" ?
                <ReportUpload />
                : ""
            }
        </>
    )
}
