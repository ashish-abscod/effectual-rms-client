import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

export default function AddUserToProject() {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState([]);
  console.log(assignedUsers);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => (setUserData(data), setFilteredUsers()));
  };

  const submitData = async () => {
    let info = await fetch("http://localhost:8080/assigned/", {
      method: "post",
      body: JSON.stringify(assignedUsers._id),
      headers: {
        "Content-Type": "application/json",
      },
    });

    info = await info.json();

    console.log(info);
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
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: -"webkit-fill-available",
        gap: "30px",
      }}
    >
      <div
        className="d-flex flex-column align-items-center"
        style={{ width: "174%", height: "85%", marginLeft: "-14px" }}
      >
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
          striped
          customStyles={customStyles}
          responsive
          onSelectedRowsChange={(selectedRows) => {
            setAssignedUsers(selectedRows?.selectedRows);
          }}
        />
      </div>

      <div>
        <table
          style={{
            width: "300px",
            height: "100px",
            fontFamily: "arial",
            sans: "serif",
            borderCollapse: "collapse",
          }}
        >
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {assignedUsers.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}
