import React, { useState,useContext,useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


export default function UpdateUser() {
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    picture: "",
  });

  const { id } = useParams();
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


  // useEffect(() => {
  //   getUsersData();
  // }, []);

  // const getUsersData = async () => {
    
  //   let info = await fetch(`http://localhost:8080/users/${id}`);
   

  //   info = await info.json();

  //   setAddUser(addUser)
  // };



  const handleUsersEdit = async () => {
    const res = await fetch(`http://localhost:8080/users/${id}`, {
      method: "put",

      body: JSON.stringify({
       addUser
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    
  };

const { user } = useContext(UserContext);
console.log(user);
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
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center theme-color">Update Profile</h5>
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
                           setAddUser(e.target.value)
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
                           setAddUser(e.target.value)
                        }
                      />
                      <label>Email:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) =>
                          setAddUser(e.target.value)
                        }
                      />
                      <label>Password:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                    <div className="input-field">
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) =>
                          setAddUser(e.target.value)
                        }
                      />
                      <label>Confirm Password:</label>
                      <span className="d-none">Error : Field Required</span>
                    </div>
                  </div>
                  <div className="col-md-4">
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
                  onClick={handleUsersEdit}
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
