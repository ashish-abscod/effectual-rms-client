import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import axios from "axios"
import { BiDownload } from "react-icons/bi"
import { AiOutlineFolderAdd } from "react-icons/ai"
import Moment from 'react-moment';
import Modal from "react-modal";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        width: 400,
    },
};



export default function FileManger() {

    const [isLoading, setIsLoading] = useState(false);
    const [resource, setChooseFile] = useState({ file: "", filename: "" });
    const [selectedFile, setSelectedFile] = useState('');

    const [effectualReports, setEffectualReports] = useState([])
    const [clientReports, setClientReports] = useState([])
    const { setProjectId, projectId } = useContext(ProjectContext);

    const [modalOpen, setModalOpen] = useState(false);

    const uploadSingleFile = (e) => {
        if (e.target.files[0]) {
            const filename = e.target.files[0].name
            setSelectedFile(filename);
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                setChooseFile({ ...resource, file: reader.result, filename: filename });
            };
        }
    };


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

    const postEffectualReports = async () => {

        try {
            const info = await axios.get(`http://localhost:8080/commentFiles/client/${projectId}`)
            setClientReports(info?.data?.result);

        } catch (error) {
            console.log(error);
        }
    }




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
                        <div className='d-flex justify-content-center '>
                            <h5 className=' theme-color fw-bold'>
                                Effectual Files
                            </h5>
                            <h5 className='mx-2'><AiOutlineFolderAdd onClick={setModalOpen} style={{ color: "blue" }} /></h5>
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

                <Modal
                    isOpen={modalOpen}

                    onRequestClose={() => setModalOpen(false)}
                    style={customStyles}
                >
                    <div classNme="col-md-6 col-lg-4 bg-light pt-2">
                        <label className="text-primary fw-bold d-flex align-items-center">
                            Upload File:
                            {isLoading && (
                                <>
                                    <div className="spinner-border text-secondary ms-3 me-2" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                    <span className="text-secondary">Uploading...</span>
                                </>
                            )}
                        </label>

                        <input
                            type="file"
                            className="form-control mt-2"
                            onChange={(e) => uploadSingleFile(e)}
                        />
                        <label>Attach Male</label>
                        <input
                            type="email"
                            className="form-control mt-2"
                        />
                        <label>Report Status:</label>
                        <select className="form-select"
                            type="text"
                            name=" report"
                            required
                            id="report"

                        >

                            <option value="Initial Report">Initial Report</option>
                            <option value="Interim Report">Interim Report</option>
                            <option value="Final Report">Final Report</option>

                        </select>



                    </div>

                    <button className='bg-success m-3' onClick={() => setModalOpen(false)}>Close Modal</button>
                </Modal>

            </div>
        </>
    )
}
