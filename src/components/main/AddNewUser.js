import React, { useState ,useEffect} from "react";
import axios from "axios";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddNewUser() {
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Patent Expert", //default value for role
    status: true
  });
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const submitData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8080/users", addUser);
      console.log(response.data);
      toast.success(response.data.msg);
      if(response.data.status === "success"){
        window.location.replace('/main')
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.msg)
    }finally{
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    if(addUser.passwordpassword !== addUser.confirmPassword){
        setError("Both Passwords must be match!");
    }else{
        setError(null);
    }

},[addUser.password, addUser.confirmPassword]);


  return (
    <>
      <div
        className="modal fade"
        id="addUser"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-center theme-color"
                id="addUserLabel"
              >
                Add New User
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
                    <div className="input-field mt-0 ">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        value={addUser.name}
                        onChange={(e) =>
                          setAddUser({ ...addUser, name: e.target.value })
                        }
                      />
                      <label>Name:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={addUser.email}
                        onChange={(e) =>
                          setAddUser({ ...addUser, email: e.target.value })
                        }
                      />
                      <label>Email:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={addUser.password}
                        onChange={(e) =>
                          setAddUser({ ...addUser, password: e.target.value })
                        }
                      />
                      <label>Password:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={addUser.confirmPassword}
                        onChange={(e) =>
                          setAddUser({
                            ...addUser,
                            confirmPassword: setAddUser({ ...addUser, password: e.target.value }),
                          })
                        }
                      />
                      <label>Confirm Password:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <span className='text-danger mt-2 d-block'>{error}</span>
                        {data?.status === "success" ? <span className='text-success fw-bold fs-3 d-block'>{data?.mssg}</span>
                         : data?.status === "failed" ? <span className='text-danger fw-bold d-block'>{data?.mssg}</span> : ""}

                    <div className="input-field">
                      <select className="form-select"
                        type="text"
                        name=" role"
                        required
                        id="role"
                        onChange={(e) => {
                          setAddUser({
                            ...addUser,
                            role: e.target.value,
                          });
                        }}
                      >
                        <option value="Manager">Manager</option>
                        <option value="Patent Expert" selected={true}>Patent Expert</option>
                        <option value="Searcher">Searcher</option>
                        <option value="Client Admin">Client Admin</option>
                        <option value="Effectual Admin">Effectual Admin</option>
                        <option value="Technical Expert">Technical Expert</option>
                      </select>
                      <label>Role:</label>
                      <span className="d-none">Error : Field Required</span>
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
              <div className="">
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill me-3"
                  onClick={() =>
                    setAddUser({
                      ...addUser,
                      name: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                      role: "",
                      picture: "",
                    })
                  }
                >
                  Clear
                </button>
                <button
                  type="submit"
                  variant="btn btn-success w-100"
                  disabled={isLoading}
                  className="btn theme-bg text-white rounded-pill"
                  onClick={submitData}
                >
                  Add User
                  {isLoading && (
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                   )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
