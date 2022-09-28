import React, { useState } from "react";
import axios from "axios";

export default function AdvanceSearch() {
  //   const [addUser, setAddUser] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //     role: "",
  //     picture: "",
  //     status: true,
  //   });

  // const [file, setFile] = useState();

  // const uploadSingleFile = (e) => {
  //   if (e.target.files[0]) {
  //     // console.log("e.target.files[0]: ", e.target.files[0]);
  //     const reader = new FileReader();
  //     setFile(URL.createObjectURL(e.target.files[0]));
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onloadend = () => {
  //       // console.log("reader.result: ", reader.result);
  //       setAddUser({ ...addUser, picture: reader.result });
  //       setFile(reader.result);
  //     };
  //   }
  // };

  //   const submitData = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:8080/users", addUser);

  //       console.log("addresponse: ", response);
  //     } catch (error) {
  //       console.log("error: ", error);
  //     }
  //   };
  return (
    <>
      <div
        className="modal fade"
        id="advanceSearch"
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
                Advance Search
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
                    <div className="input-field">
                      <select
                        className="form-select"
                        type="text"
                        name=" role"
                        required
                        id="role"
                      >
                        <option value="Manager">Delivery Date</option>
                        <option value="Patent Expert">Request Date</option>
                        <option value="Searcher">Type</option>
                      </select>
                      <label>Search Field:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field mt-0 ">
                      <input type="text" className="form-control" required />
                      <label>Search:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                  </div>
                  {/* <div className="col-md-4 mt-4">
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
                  className="btn theme-bg text-white rounded-pill"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
