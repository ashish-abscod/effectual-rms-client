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
  const { projectId } = useContext(ProjectContext);
  const [alreadyAssignedUsers, setAlreadyAssignedUsers] = useState(null);

  useEffect(() => {
    // getUserData();
    if (projectId) {
      getAssignmentData();
    }
  }, [projectId]);


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
      .then((data) => setAlreadyAssignedUsers(data));
         };

  const handleAssignedUserDelete = async (id, userId) => {
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
  };

  useEffect(() => {
    const filters = userData.filter(
      (user) =>
        JSON.stringify(user).toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    setFilteredUsers(filters);
  }, [userData, search]);


  const handleRemove = async (id) => {
    // console.log(id);
    // console.log(formData.assignedUsers);
    const filteredUsers = formData?.assignedUsers?.filter(obj => obj._id !== id);
    console.log(filteredUsers);
    setFormData({...formData, assignedUsers : filteredUsers});
  }
  
  const selectUser = async (row) =>{
    formData?.assignedUsers.push(row);
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
            noDataComponent="Please Search User to assign."
            pagination
            fixedHeader
            fixedHeaderScrollHeight="470px"
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

        <div className="col-lg-5 overflow-auto" style={{maxHeight: "70vh"}}>
          <table className="table mt-4 table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
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

            {formData?.assignedUsers?.map((item, i) => (
              <tr className="mb-2" key={i}>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>
                    <AiOutlineClose onClick={()=> handleRemove(item._id)} />
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}