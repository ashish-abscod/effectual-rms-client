import React, { useEffect, useState } from "react";
import AddNewUser from "./AddNewUser";
import SundarPichari from "../../Assets/Sundar Pichai.jpg";
export default function ManageUser() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let info = await fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
    info = await info.json();
    setUserData(info)
;
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key)
 {
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
        <div className="row pt-3">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="col-md-3">
              <h3 className="text-center theme-color">Users List</h3>
            </div>
            <div
              className="flex items-center   "
              style={{ width: "31%", marginRight: "-40%" }}
            >
              <input
                id="search"
                name="search"
                required
                className=" bg-transparent text-black-800 dark:text-black-100 focus:outline-none  font-normal py-1 flex items-center text-sm focus:border-indigo-700 "
                placeholder="Search"
                style={{ width: "72%" }}
                onChange={searchHandle}
              />
            </div>
            <div className="">
              <AddNewUser />
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill w-40"
                data-bs-toggle="modal"
                data-bs-target="#addUser"
              >
                Add New User
              </button>
            </div>
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
                {userData.map((item) => {
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
                              src = {item.picture}
                                alt=""
                                className="w-100 h-100 overflow-hidden rounded "
                              >
                                
                              </img>
                            </div>
                          </td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.role}</td>
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