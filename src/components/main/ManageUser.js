import React, { useEffect, useState } from "react";
import AddNewUser from "./AddNewUser";
import SundarPichari from "../../Assets/Sundar Pichai.jpg";
export default function ManageUser() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    // patientData.patientID = patientId;
    let info = await fetch("http://localhost:8080/users/")
      .then((res) => res.json())
      .then((data) => setUserData(data));
    info = await info.json();
    setUserData(info);

    // console.log(info, "info");
    // console.log(patientData, "patientent data");
  };
  return (
    <>
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-6">
            <h3 className="text-center theme-color">Users List</h3>
          </div>
          <div className="col-md-6">
            <AddNewUser />
            <button
              type="button"
              className="btn btn-outline-secondary rounded-pill w-100"
              data-bs-toggle="modal"
              data-bs-target="#addUser"
            >
              Add New User
            </button>
          </div>
        </div>
        <div className="row pt-3">
          <div>
            <div style={{ height: "67vh" }} className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>User Name</th>
                    <th>Email Id</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {userData?.map?.((item) => {
                  return (
                    <>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>
                            <div
                              className="rounded shadow me-3"
                              style={{ width: "50px", height: "50px" }}
                            >
                              <img
                                src={SundarPichari}
                                alt=""
                                className="w-100 h-100 overflow-hidden rounded "
                              />
                            </div>
                          </td>
                          <td>{item.name}</td>
                          <td>Ot</td>
                          <td>Otto</td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-outline-danger rounded-pill w-50"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
