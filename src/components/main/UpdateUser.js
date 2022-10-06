import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/inject-style";


export default function UpdateUser() {
  const { user, setUser } = useContext(UserContext);
  const {navigate} = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [addUser, setAddUser] = useState({
    name: user?.userData?.name ? user?.userData?.name : "",
    email: user?.userData?.email ? user?.userData?.email : "",
    password: "",
    confirmPassword: "",
  });
  const [passType, setPassType] = useState({
    first: "Password",
    second: "Password",
  });


  const handleUsersEdit = async () => {
    setIsLoading(true);
    try {
      let res = await axios.put(
        `http://localhost:8080/users/update/${user.userData._id}`,
        addUser
      );

      setIsLoading(false);
      toast("profile updation successfull!");
      console.log("response: ", res);
      setUser({
        ...user,
        auth: false,
        userData: "",
        token: null,
      });
      localStorage.clear();
      window.location.replace('/');
    
    } catch (error) {
      setIsLoading(false);
      console.log("error: ", error.res);
      toast.error("updating user is unsuccessfull");
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
                        // value={addUser.name}
                        onChange={(e) =>
                          setAddUser({
                            ...addUser,
                            [addUser.name]: e.target.value,
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
                        // value={addUser.email}
                        onChange={(e) =>
                          setAddUser({
                            ...addUser,
                            [addUser.email]: e.target.value,
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
                        value={addUser.password}
                        onChange={(e) =>
                          setAddUser({ ...addUser, password: e.target.value })
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
                        value={addUser.confirmPassword}
                        onChange={(e) =>
                          setAddUser({
                            ...addUser,
                            confirmPassword: e.target.value,
                          })
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
                  {/* <div className="col-md-4">
                    <div>
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Choose image
                      </label>
                      <input
                        type="file"
                        className="form-control mb-2"
                        onChange={uploadSingleFile}
                      />
                      <img
                        src={file && file}
                        alt="profile"
                        height="200px"
                        width="200px"
                      />
                    </div>
                  </div> */}
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
