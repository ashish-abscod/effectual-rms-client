import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

export default function PasswordReset() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [data, setData] = useState("");
    let { userId, token } = useParams();

    useEffect(()=>{
        if(password.length <= 4){
            setError("Password is too small");
        }
        else if(password !== confirmPassword){
            setError("Both Password must be match!");
        }else{
            setError(null);
        }

    },[password, confirmPassword]);

    const resetPassword = async ()=> {
        if(error === null) {
            console.log("called.");
            const res = await axios.post(`http://localhost:8080/password/reset/${userId}/${token}`, {password : password});
            setData(res?.data);
            if(res?.data?.status === "success"){
                setIsDisabled(true);
                setTimeout(() => {
                    window.location.replace('/');
                }, 3000);
            }

        }
    }

    return (
        <>
            <div className='container'>
                <div className="row justify-content-center mt-3">
                    <h1 className='text-center theme3-color'>Effectual RMS Password Recovery</h1>
                    <div className="col-5 mt-5 text-center">
                        <div className="input-field mb-3">
                            <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label className='fs-6'>Password</label>
                        </div>
                        <div className="input-field mb-2">
                            <input type="password" className="form-control" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label className='fs-6'>Confirm Password</label>
                        </div>
                        <span className='text-danger mt-2 d-block'>{error}</span>
                        {data?.status === "success" ? <span className='text-success fw-bold fs-3 d-block'>{data?.mssg}</span> : data?.status === "failed" ? <span className='text-danger fw-bold d-block'>{data?.mssg}</span> : ""}
                        <button className="btn theme2-bg text-white fw-bold px-4 mt-4" type="button" onClick={()=>resetPassword()} disabled={isDisabled}>Reset Password</button>
                    </div>
                </div>
            </div>
        </>
    )
}
