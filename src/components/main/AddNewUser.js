import React, { useState } from "react";
import axios from "axios";

export default function AddNewUser() {
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    picture: "",
    status:true
  });
  const [file, setFile] = useState();

  const uploadSingleFile = (e) => {
    if (e.target.files[0]) {
      // console.log("e.target.files[0]: ", e.target.files[0]);
      const reader = new FileReader();
      setFile(URL.createObjectURL(e.target.files[0]));
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        // console.log("reader.result: ", reader.result);
        setAddUser({ ...addUser, picture: reader.result });
        setFile(reader.result);
      };
    }
  };

  const submitData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/users", addUser);

      console.log("addresponse: ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  };
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
        <div className="modal-dialog modal-lg">
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
                  <div className="col-md-8">
                    <div className="input-field mt-0 ">
                      <input
                        type="text"
                        className="form-control"
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
                            confirmPassword:  setAddUser({ ...addUser, password: e.target.value }),
                          })
                        }
                      />
                      <label>Confirm Password:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    {/* <div className="input-field">
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={addUser.role}
                        onChange={(e) =>
                          setAddUser({ ...addUser, role: e.target.value })
                        }
                      />
                      <label>Role:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div> */}
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
                        <option value="Patent Expert">Patent Expert</option>
                        <option value="Searcher">Searcher</option>
                        <option value="Client Admin">Client Admin</option>
                        <option value="Effectual Admin">Effectual Admin</option>
                        <option value="Technical Expert">Technical Expert</option>
                      </select>
                      <label>Role:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    <div className="mt-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Choose image
                      </label>
                      <input
                        // disabled={loader}
                        type="file"
                        // disabled={file || loader}
                        className="form-control mb-2"
                        onChange={uploadSingleFile}
                      />
                      <img
                        src={file && file}
                        alt="dummy"
                        height="200px"
                        width="200px"
                      />
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
                  type="button"
                  className="btn theme-bg text-white rounded-pill"
                  onClick={submitData}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
