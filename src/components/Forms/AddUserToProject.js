import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { ProjectContext } from "../contexts/ProjectContext";
import { UserContext } from "../contexts/UserContext";

export default function AddUserToProject({formData, setFormData}) {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]); 
   const [assignedUsers, setAssignedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const { projectId } = useContext(ProjectContext);


  console.log(formData?.assignedUsers);

  useEffect(() => {
    getUserData();
  }, []);

  // const updateProject = () => {
  //   if (projectId === null) {
  //     try{

  //     }catch(error){

  //     }
  //   }
  // };

  const submitData = async () => {
    let info = await axios.post("http://localhost:8080/assigned/createUser", {
<<<<<<< HEAD
      userId: assignedUsers,
=======
      userId: [assignedUsers],
>>>>>>> 3e7e300f84f5579e3781baa0813a338cd3e3de03
      projectId: "",
      assignedBy: user.userData._id,
    });
    console.log(info);
  };

  const getUserData = async () => {
    try {
      setLoading(true);
      await fetch("http://localhost:8080/users")
        .then((res) => res.json())
        .then((data) => (setUserData(data), setFilteredUsers()));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(assignedUsers);
  //multiple fields search based on search key
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

  return (
    <>
      <div className="row">
        <div className="col-lg-7">
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
                <h5 className="d-inline text-primary">Assign Users</h5>
                <input
                  type="search"
                  className="form-control d-inline w-50"
                  placeholder="Search User..."
                ></input>
              </div>
            }
            striped
            customStyles={customStyles}
            responsive
            onSelectedRowsChange={(selectedRows) => {
              setFormData({...formData, assignedUsers : selectedRows?.selectedRows});
              console.log(selectedRows)
            }}
            progressPending={loading}
          />
        </div>

        <div className="col-lg-5">
          {/* <button onClick={submitData}>submit</button> */}
          <table className="table mt-4 table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            {assignedUsers.map((item, i) => (
              <tr className="mb-2" key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
