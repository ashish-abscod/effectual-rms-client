import React, { useEffect, useState, useRef } from "react";
import AddNewUser from "./AddNewUser";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";



export default function ManageUser() {
  const {user} = useContext(UserContext);
  const [userData, setUserData] = useState([]);
  const [status] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const target = useRef(null);

  const getUserData = async () => {
    const EffectualUsers = ["Effectual Admin", "Manager", "Searcher"];
    const ClientUsers = ["Client Admin", "Patent Expert", "Technical Expert"];
    const loginUser = user?.userData?.role;

    //if return boolean true it means logged in user is Effectual user else it might be client user.
    if (EffectualUsers.indexOf(loginUser) !== -1) {
      try {   
        await fetch(`${process.env.REACT_APP_API_URL}/users/getEffectulalUsers`)
          .then((res) => res.json())
          .then((data) => { setUserData(data); setFilteredUsers(data) });
      } catch (error) {
        toast.error("Something went wrong in fetching users.");
      }
    }
    // now if user is not effectual side than it might be a client user.
    else if(ClientUsers.indexOf(loginUser) !== -1){
      try {
        await fetch(`${process.env.REACT_APP_API_URL}/users/getClientUsers`)
        .then((res) => res.json())
        .then((data) => { setUserData(data); setFilteredUsers(data) });
      } catch (error) {
        toast.error("Something went wrong in fetching users.");
      }
    }else{
      toast.warning("You are niether an Effectual User nor a Client User.");
    }

  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filters = userData?.filter(user => JSON.stringify(user)
      .toLowerCase()
      .indexOf(search.toLowerCase()) !== -1);
    setFilteredUsers(filters);
  }, [search, userData]);

  const handleUsersDelete = async (id, name) => {
    const confirmation = window.confirm(`Are you sure to delete:  ${name} ?`);
    if (confirmation) {
      try {
        let res = await axios.put(
          `${process.env.REACT_APP_API_URL}/users/delete/${id}`,
          status
        );
        if (res) {
          getUserData();
        }
      } catch (error) {
        console.log(error);
      }
    }
    return;
  };

  return (
    <>
      <div className="container">
        <div className="row pt-3 justify-content-between">
          <div className="col-md-3">
            <h3 className="text-center theme-color">Users List</h3>
          </div>
          <div className="col-md-4">
            <input
              id="search"
              name="search"
              className="form-control me-2 border border-primary"
              type="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3">
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
                <thead className="table-dark" data-sticky-header={true}>
                  <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Email Id</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="fw-bold">
                  {filteredUsers?.map((item, i) =>
                    item.status === true ? (
                      <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td className="text-center">
                          <button
                            ref={target}
                            type="button"
                            className="btn btn-outline-danger rounded-pill"
                            onClick={() =>
                              handleUsersDelete(item._id, item.name)
                            }
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
