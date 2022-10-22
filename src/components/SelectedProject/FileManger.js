import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import axios from "axios"
import { BiDownload } from "react-icons/bi"
import Moment from 'react-moment';

export default function FileManger() {

    const [effectualReports, setEffectualReports] = useState([])
    const [clientReports, setClientReports] = useState([])
    const { setProjectId, projectId } = useContext(ProjectContext);
    useEffect(() => {
        if (!projectId) setProjectId(window?.localStorage?.getItem('projectId'));
      }, [projectId,setProjectId])
    
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
    }, [projectId])
   
    return (
        <>
            <div className='container'>
                <div className='row row-cols-md-2 pt-4 '>
                    <div>
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
                                                <td className='text-center'><a href={url} className="me-3 fw-bold lh-1"><BiDownload size={25}/></a></td>
                                            </tr>

                                        )
                                    )

                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h5 className='text-center theme-color fw-bold'>
                            Effectual Files
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
                               
                                    {effectualReports?.map?.((item, a) =>
                                        item?.files?.map((url, b) =>
                                            <tr key={`${a}${b}`}>
                                                <td>{item.uploadedBy}</td>
                                                <td><Moment format="DD/MM/YYYY HH:mm a">{item.createdAt}</Moment></td>
                                                <td className='text-center'><a href={url} className="me-3 fw-bold lh-1"><BiDownload size={25}/></a></td>
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
        </>
    )
}
