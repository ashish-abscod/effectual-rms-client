import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import DataTable from "react-data-table-component";
import { ProjectContext } from "../contexts/ProjectContext";
import { UserContext } from "../contexts/UserContext";

export default function AddUserToProject() {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const { user } = useContext(UserContext);
  const { projectId } = useContext(ProjectContext);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => (setUserData(data), setFilteredUsers()));
  };

  const submitData = async () => {
    // let info = await axios.post("http://localhost:8080/assigned/", {
    //   userId: assignedUsers._id,
    //   projectId: "",
    //   assignedBy: user.userData._id,
    // });
    // console.log(info);
    console.log(assignedUsers._id);
  };

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
        maxHeight: "49vh!important"
      }
    }
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
            subHeaderComponent={<input type="search" className="form-control"></input>}
            striped
            customStyles={customStyles}
            responsive
            onSelectedRowsChange={(selectedRows) => {
              setAssignedUsers(selectedRows?.selectedRows);
            }
            }
          />
        </div>

        <div className="col-lg-5">
          <table className="table mt-4 table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            {assignedUsers.map((item) =>
              <tr className="mb-2">
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </>
  );
}
