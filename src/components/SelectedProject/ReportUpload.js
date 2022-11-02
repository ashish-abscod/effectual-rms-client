import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { ProjectContext } from '../contexts/ProjectContext';
import { UserContext } from '../contexts/UserContext';

export default function ReportUpload() {


    const { user } = useContext(UserContext);
    const { projectId } = useContext(ProjectContext);
    const [isDisabled, setIsDisabled] = useState(false);
    const [reportStatus, setReportStatus] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [resource, setResource] = useState({ file: "", filename: "", emailContent: "", projectId: projectId, role: user?.userData?.role, uploadedBy: user?.userData?.name });

    useEffect(() => {
        setResource((preRes) => ({ ...preRes, projectId: projectId }));
    }, [projectId]);


    const uploadSingleFile = (e) => {
        if (e.target.files[0]) {
            const filename = e.target.files[0].name;
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                setResource({ ...resource, file: reader.result, filename: filename });
            };
        }
    };


    const handleReportUpload = async () => {
        try {
            setIsLoading(true);
            setIsDisabled(true);
            const res1 = await axios.put(`${process.env.REACT_APP_API_URL}/files/updateStatus/${projectId}`, { status: reportStatus });
            if (res1?.data?.status === "success") toast.success(res1?.data?.msg);
            else toast.error(res1?.data?.msg)
            const res2 = await axios.post(`${process.env.REACT_APP_API_URL}/files/uploadReportAndSendEmails`, resource);
            if (res2?.data?.status === "success") toast.success(res2?.data?.msg);
            else toast.error(res2?.data?.msg);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.");
        } finally {
            setIsLoading(false);
            setIsDisabled(false);
        }
    }
    return (
        <>
            <div
                className="modal fade"
                id="reportUpload"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center theme-color">
                                Upload Project Report
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input
                                            type="file"
                                            className="form-control mt-2 mb-3"
                                            onChange={(e) => uploadSingleFile(e)}
                                            disabled={isDisabled}
                                        />
                                        <label>Attach Email:</label>
                                        <input
                                            type="checkbox"
                                            className="form-check-input ms-3"
                                            value={isChecked}
                                            onChange={(e) => setIsChecked(!isChecked)}
                                        />
                                        {isChecked ?
                                            <div className="input-field">
                                                <textarea
                                                    className="form-control"
                                                    placeholder='Write something'
                                                    value={resource?.emailContent}
                                                    onChange={(e) => setResource({ ...resource, emailContent: e.target.value })}
                                                />
                                            </div>
                                            : ""
                                        }
                                        <div className="input-field">
                                            <select
                                                className="form-select"
                                                value={reportStatus}
                                                onChange={(e) => { setReportStatus(e.target.value) }}
                                            >
                                                <option value="Initial Report">Initial Report</option>
                                                <option value="Interim Report">Interim Report</option>
                                                <option value="Completed">Final Report</option>
                                            </select>
                                            <label>Report Status:</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-secondary rounded-pill"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            {isLoading && (
                                <div className='d-flex align-items-center'>
                                    <div className="spinner-border text-secondary ms-3 me-2" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                    <span className="text-secondary">Uploading...</span>
                                </div>
                            )}
                            <button
                                type="button"
                                disabled={isDisabled}
                                variant="btn btn-success w-100"
                                className="btn theme-bg text-white rounded-pill"
                                onClick={handleReportUpload}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
