import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { ProjectContext } from "../contexts/ProjectContext";
import { UserContext } from "../contexts/UserContext";
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export default function AddUserToProject({ formData, setFormData }) {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const { projectId } = useContext(ProjectContext);
  const [getassignedUserData, setassignedUserData] = useState(null);

  useEffect(() => {
    // getUserData();
    if (projectId) {
      getAssignmentData();
    }
  }, [projectId]);

  // const updateProject = () => {
  //   if (projectId === null) {
  //     try{

  //     }catch(error){

  //     }
  //   }
  // };

  const getUserData = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8080/users/search/${key}`);
      result = await result.json();
      if (result) {
        setFilteredUsers(result);
      }
    } else {
      setFilteredUsers([]);
    }
  };
  const getAssignmentData = async () => {
    // appointmentData.patientID = patientId;
    await fetch(`http://localhost:8080/assigned/getUserById/${projectId}`)
      .then((res) => res.json())
      .then((data) => setassignedUserData(data));
  };
  console.log(getassignedUserData);
  const handleAssignedUserDelete = async (id, userId) => {
    console.log(id + "---" + userId);
    let res = await fetch(
      `http://localhost:8080/assigned/deleteUser/${id}/${userId}`,
      {
        method: "put",
      }
    );
    res = await res.json();
    if (res) {
      getAssignmentData();
    }

    console.log(id);
  };

  //ltiple fields search based on search key
  useEffect(() => {
    const filters = userData.filter(
      (user) =>
        JSON.stringify(user).toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    setFilteredUsers(filters);
  }, [userData, search]);

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

  const handleClose = (index) => {
    console.log(formData.assignedUsers);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-7 mt-3">
          <DataTable
            columns={columns}
            data={filteredUsers}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="470px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
              <div className="d-flex justify-content-around bg-light py-2">
                <h5 className="d-inline text-primary">
                  Assign users to project
                </h5>
                <input
                  type="search"
                  className="form-control d-inline w-50"
                  placeholder="Search User by name, email, role..."
                  onChange={getUserData}
                ></input>
              </div>
            }
            striped
            customStyles={customStyles}
            responsive
            onSelectedRowsChange={(selectedRows) => {
              setFormData({
                ...formData,
                assignedUsers: selectedRows?.selectedRows,
              });
              console.log(selectedRows);
            }}
            progressPending={loading}
          />
        </div>

        <div className="col-lg-5">
          <table className="table mt-4 table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {getassignedUserData?.userId?.map((item, index) => (
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
                          getassignedUserData._id,
                          item._id
                        )
                      }
                    />
                  </p>
                </td>
              </tr>
            ))}

            {formData?.assignedUsers.map((item, i, index) => (
              <tr className="mb-2" key={i}>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>
                  <p>
                    <AiOutlineClose onClick={handleClose(index)} />
                  </p>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
