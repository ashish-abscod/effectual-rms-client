import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/inject-style";


export default function UpdateUser() {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const [passType, setPassType] = useState({
    first: "Password",
    second: "Password",
  });


  const handleUsersEdit = async () => {
    setIsLoading(true);
    try {
      let res = await axios.put(
        `http://localhost:8080/users/update/${user.userData._id}`,
        name,email,password,confirmPassword
      );

      setIsLoading(false);
      toast.success(res.message);
      console.log("response: ", res);
      if(addUser.email || addUser.password){
        setUser({
          ...user,
          auth: false,
          userData: "",
          token: null,
        });
        localStorage.clear();
        window.location.replace('/');
        toast.success(res.message);
        console.log("response: ", res);
      }
      
    
    } catch (error) {
      setIsLoading(false);
      console.log("error: ", error);
      toast.error(error);
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="changeProfile"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center theme-color">
                Update Profile
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
                        value={name}
                        onChange={(e) =>
                          setName({
                             name: e.target.value,
                          })
                        }
                      />
                      <label>Name:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) =>
                          setEmail({
                            email: e.target.value,
                          })
                        }
                      />
                      <label>Email:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type={passType?.first}
                        className="form-control"
                        value={password}
                        onChange={(e) =>
                          setPassword({ password: e.target.value })
                        }
                        style={{ width: "90%" }}
                      />
                      {passType.first === "Password" ? (
                        <FaEyeSlash
                          className="fs-4 text-secondary ms-3"
                          onClick={() =>
                            setPassType({ ...passType, first: "text" })
                          }
                        />
                      ) : (
                        <FaEye
                          className="fs-4 text-secondary ms-3"
                          onClick={() =>
                            setPassType({ ...passType, first: "Password" })
                          }
                        />
                      )}
                      <label>Password:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type={passType.second}
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) =>
                          setConfirmPassword({confirmPassword: e.target.value})
                        }
                        style={{ width: "90%" }}
                      />
                      {passType.second === "Password" ? (
                        <FaEyeSlash
                          className="fs-4 text-secondary ms-3"
                          onClick={() =>
                            setPassType({ ...passType, second: "text" })
                          }
                        />
                      ) : (
                        <FaEye
                          className="fs-4 text-secondary ms-3"
                          onClick={() =>
                            setPassType({ ...passType, second: "Password" })
                          }
                        />
                      )}
                      <label>Confirm Password:</label>
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
                  onClick={handleUsersEdit}
                >
                  Update Profile
                  {isLoading && (
                    <div className="spinner-border">
                      <span className="sr-only"></span>
                    </div>
                  )}
                </button>
                <ToastContainer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}