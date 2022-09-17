import React, { useEffect, useState } from "react";
import AddNewUser from "./AddNewUser";
export default function ManageUser() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8080/users/search/${key}`);
      result = await result.json();
      if (result) {
        setUserData(result);
      }
    } else {
      getUserData();
    }
  };
  return (
    <>
      <div className="container">
        <div className="row pt-3 justify-content-between">
          <div className="col-md-3">
            <h3 className='text-center theme-color'>Users List</h3>
          </div>
          <div className="col-md-4">
            <input id="search" name="search" className="form-control me-2 border border-primary" type="search" placeholder="Search" onChange={searchHandle} />
          </div>
          <div className="col-md-3">
            <AddNewUser />
            <button type="button" className="btn btn-outline-secondary rounded-pill w-100" data-bs-toggle="modal" data-bs-target="#addUser">Add New User</button>
          </div>
        </div>
        <div className="row pt-3">
          <div>
            <div style={{ height: "67vh" }} className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark" data-sticky-header={true}>
                  <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>User Name</th>
                    <th>Email Id</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="fw-bold">
                  {userData.map((item, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>
                            <div
                              className="rounded shadow me-3"
                              style={{ width: "50px", height: "50px" }}
                            >
                              <img
                                alt=""
                                className="w-100 h-100 overflow-hidden rounded "
                              ></img>
                            </div>
                          </td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.role}</td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-outline-danger rounded-pill"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
