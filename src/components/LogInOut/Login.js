import React, {useContext,useState} from 'react'
import { UserContext } from "../../components/contexts/UserContext";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate(); 
    const { setUser, user } = useContext(UserContext);

    //   user initial state before login
    const [userDetails, setDetails] = useState({
        email: "",
        password: "",
    });


    const loginApi = async () => {
       
        console.log(userDetails);
       
        try {
            const response = await axios.post(
                "http://localhost:8080/signin",
                userDetails
            );

           
            setUser({
                ...user,
                auth: true,
                userData: response.data.user,
                token: response.data,
            });

           
            console.log("response: ", response);
            localStorage.setItem("userData", JSON.stringify(response.data.user));
            //to save in localstorage we have to serialize it, means to stringfy it
            localStorage.setItem("token", JSON.stringify(response.data.token));
            document.getElementById('loginModalClose').click() 
            navigate("/main")
           
        } catch (error) {
           
            console.log("error: ", error);
        }
    };


    return (
        <>
            <div className="modal fade" id="loginModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header theme2-bg justify-content-between">
                            <h5 className="modal-title theme3-color fw-bold fs-3 text-white" id="loginModalLabel">Login</h5>
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal" aria-label="Close" id='loginModalClose'>Close</button>
                        </div>
                        <div className="modal-body px-4">
                            <form id="login" className="" name="login-form">
                                <p className="status"></p>
                                <label className="text-secondary fs-5 mb-2 fw-bold" htmlFor="email" >Email</label>
                                <input type="text" id="email" className="form-control fs-5 text-secondary" name="email" onChange={(e) => setDetails({...userDetails, email:e.target.value})}  /><br />
                                <label className="text-secondary fs-5 mb-2 fw-bold" htmlFor="password" >Password</label>
                                <input type="password" id="password" className="form-control fs-5 text-secondary" name="password" autoComplete="off" onChange={(e) => setDetails({...userDetails, password:e.target.value})} />
                                <div className="mt-5 mb-4">
                                    <a  href="/" className="me-5" data-bs-target="#forgotPassModal" data-bs-toggle="modal" type="submit" data-bs-dismiss="modal">Forgot password?</a>
                                    <button className="btn bg-success text-white px-5 float-end" type="button" value="LOGIN" onClick = {loginApi}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}