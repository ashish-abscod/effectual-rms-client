import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { ProjectContext } from "../contexts/ProjectContext";
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export default function AddUserToProject({ assignedUsers, setAssginedUsers }) {
  const [userData] = useState([]);
  const [search] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [loading] = useState(false);
  const { projectId } = useContext(ProjectContext);
  const [alreadyAssignedUsers, setAlreadyAssignedUsers] = useState(null);



  const getUserData = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${process.env.REACT_APP_API_URL}/users/search/${key}`);
      result = await result.json();
      if (result) {
        setFilteredUsers(result);
      }
    } else {
      setFilteredUsers([]);
    }
  };
  const getAssignmentData = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/assigned/getUserById/${projectId}`)
      .then((res) => res.json())
      .then((data) => setAlreadyAssignedUsers(data));
  };

  useEffect(() => {
    if (projectId) {
      getAssignmentData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  const handleAssignedUserDelete = async (id, userId) => {
    let res = await fetch(
      `${process.env.REACT_APP_API_URL}/assigned/deleteUser/${id}/${userId}`,
      {
        method: "put",
      }
    );
    res = await res.json();
    if (res) {
      getAssignmentData();
    }
  };

  useEffect(() => {
    const filters = userData.filter(
      (user) =>
        JSON.stringify(user).toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    setFilteredUsers(filters);
  }, [userData, search]);

  const handleRemove = async (id) => {
    const filteredUsers = assignedUsers?.filter(
      (obj) => obj._id !== id
    );
    setAssginedUsers(filteredUsers);
  };

  const selectUser = async (row) => {
    //to assign only distinct users.
    if (!assignedUsers?.find(item => item.email === row.email)) {
      assignedUsers?.push(row);
    }
    setFilteredUsers([]);
    document.getElementById("searchUser").value = "";
  }

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        fontSize: "15px",
        fontWeight: "bolder",
        cursor: "pointer",
      },
    },
    headCells: {
      style: {
        fontSize: "15px",
      },
    },
    table: {
      style: {
        maxHeight: "49vh!important",
      },
    },
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-7 mt-3">
          <DataTable
            columns={columns}
            data={filteredUsers}
            noDataComponent=""
            pagination
            fixedHeader
            fixedHeaderScrollHeight="470px"
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
              <div className="d-flex justify-content-around bg-light py-2">
                <h5 className="d-inline text-primary fw-bold">
                  Assign users to project
                </h5>
                <input
                  type="search"
                  id="searchUser"
                  className="form-control d-inline w-50"
                  placeholder="Search User by name..."
                  onChange={getUserData}
                ></input>
              </div>
            }
            striped
            customStyles={customStyles}
            responsive
            onRowClicked={(row) => selectUser(row)}
            progressPending={loading}
          />
        </div>
        <div className="col">
          <h5 className="text-primary fw-bold d-inline-block mt-2 m-0 p-0 text-center">Assigned Users</h5>
          <div className="overflow-auto" style={{ maxHeight: "65vh" }}>
            <table className="table table-striped table-responsive">
              {(assignedUsers?.length > 0 || alreadyAssignedUsers?.userId?.length > 0) ?
                <thead thead className="thead-dark bg-dark text-light">
                  <tr className="bg-dark">
                    <th scope="col" className="position-sticky top-0 bg-dark">Name</th>
                    <th scope="col" className="position-sticky top-0 bg-dark">Role</th>
                    <th scope="col" className="position-sticky top-0 bg-dark">Action</th>
                  </tr>
                </thead>
                : ""
              }
              <tbody>
                {alreadyAssignedUsers?.userId?.map((item) => (
                  <tr className="mb-2" key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>
                      <p>
                        <MdDelete
                          style={{
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            handleAssignedUserDelete(
                              alreadyAssignedUsers._id,
                              item._id
                            )
                          }
                        />
                      </p>
                    </td>
                  </tr>
                ))}

                {assignedUsers?.map((item, i) => (
                  <tr className="mb-2" key={i}>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>
                      <AiOutlineClose onClick={() => handleRemove(item._id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}