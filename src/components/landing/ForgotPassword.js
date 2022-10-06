import { useState } from 'react'
import axios from "axios"

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [inProgress, setInProgress] = useState(false);
    const [data, setData] = useState("");

    const passwordResetRequest = async () => {
        try {
            setIsDisabled(true);
            setInProgress(true);
            const res = await axios.post(
                "http://localhost:8080/password/reset_request/",
                { email: email }
            );
            setData(res?.data);

        } catch (error) {
            console.log(error);
        } finally {
            setInProgress(false);
            setIsDisabled(false);
        }
    }

    return (
        <>
            <div className="modal fade" id="forgotPassModal" tabIndex="-1" aria-labelledby="forgotPassLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header theme2-bg justify-content-between">
                            <h4 className="modal-title theme3-color fw-bold text-white" id="loginModalLabel">Forgot Password ?</h4>
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                        <div className="modal-body">
                            <div className='container'>
                                <p className='text-secondary'>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
                                <div className="input-field mb-2">
                                    <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label className='fs-6'>Enter your email</label>
                                </div>
                                {data?.status === "success" ? <span className='text-success fw-bold'>{data?.mssg}</span> : data?.status === "failed" ? <span className='text-danger'>{data?.mssg}</span> : ""}
                                <div className="d-flex align-items-center justify-content-between w-100 my-4 mb-2">
                                    <button className="btn theme2-bg text-white fw-bold px-4" disabled={isDisabled} type="button" onClick={passwordResetRequest} >Reset Password</button>
                                    {inProgress ?
                                        <div className='d-flex align-items-center'>
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden"></span>
                                            </div>
                                            <span className='text-primary ms-2'>Please wait...</span>
                                        </div> : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
