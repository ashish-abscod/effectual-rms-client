import React,{useState,useEffect} from 'react';
import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import { ProjectContext } from '../contexts/ProjectContext';
import axios from "axios"

export default function FileManger() {
const { user } = useContext(UserContext);
const [effectualReports,setEffectualReports] = useState([])
const [clientReports,setClientReports] = useState([])
const { setProjectId , projectId} = useContext(ProjectContext);
const [loading, setLoading] = useState(false);

const getEffectualReports = async () => {
    try {
        setLoading(true);
        const info = await axios.get(`http://localhost:8080/commentFiles/${projectId}`)
        setEffectualReports(info);
        console.log(effectualReports)
        
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    getEffectualReports()
}, [])


const getClientReports = async () => {
    try {
        setLoading(true);
        const info = await axios.get(`http://localhost:8080/commentFiles/client/${projectId}`)
        setClientReports(info?.data?.result);
        // console.log(/)
        console.log(clientReports)
        
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    getClientReports()
}, [])

    return (
        <>
            <div className='container'>
                <div className='row row-cols-md-2 pt-4 '>
                    <div>
                        <h5 className='text-center theme-color'>
                            Client Reports
                        </h5>
                        <div style={{height:"70vh"}} className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className='table-dark'>
                                <tr>
                                    <th>Serial</th>
                                    <th>Uploaded By</th>
                                    <th>Uploaded On</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientReports?.map?.((items, i)=>{
                                    console.log(items?.files);
                                    return(
                                        <tr>
                                        <th>{i+1}</th>
                                        <td>{items.uploadedBy}</td>
                                        <td>{items.createdAt}</td>
                                        {/* <td><a href={items?.files}>Document</a></td> */}
                                    </tr>
                                    )
                                   
                                })}
                                
                               
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <div>
                        <h5 className='text-center theme-color'>
                            Effectual Reports
                        </h5>
                        <div style={{height:"70vh"}} className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className='table-dark'>
                                <tr>
                                    <th>File</th>
                                    <th>Uploaded By</th>
                                    <th>Uploaded On</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Larry the Bird</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
