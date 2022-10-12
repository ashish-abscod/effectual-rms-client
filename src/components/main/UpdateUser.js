import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/inject-style";


export default function UpdateUser() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [passType, setPassType] = useState({
    first: "Password",
    second: "Password",
  });


  const clearHandler = () => {
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }


  const handleUsersEdit = async () => {

    try {
      let res = await axios.put(
        `http://localhost:8080/users/update/${user.userData._id}`,

        {
          body: JSON.stringify({
            name, email, password, confirmPassword
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        }

      );
      console.log(res)
      toast.success(res?.msg);
      console.log("response: ", res);
      if (email || password) {
        setUser({
          ...user,
          auth: false,
          userData: "",
          token: null,
        });
        localStorage.clear();
        toast.success(res.msg);
        window.location.replace('/')
      }


    } catch (error) {
      console.log(error);
      toast.error(error.error);
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
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label>Name:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Email:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type={passType?.first}
                        className="form-control"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                  onClick={(e) =>
                    clearHandler(e.target.value)
                  }
                >
                  Clear
                </button>
                <button
                  type="submit"
                  variant="btn btn-success w-100"
                  className="btn theme-bg text-white rounded-pill"
                  onClick={handleUsersEdit}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}