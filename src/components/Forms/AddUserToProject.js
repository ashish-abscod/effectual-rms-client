import React, { useState, useEffect } from "react";
import imgURL from "../../Assets/Effectual.jpg";
export default function AddUserToProject() {
  const [isAdded] = useState(false);
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
    <div
      style={{
        display: "contents",
      }}
    >
      <div
        className="col-md-10 shadow pt-2 rounded w-48"
        style={{ width: "60%", height: "65vh" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3 p-2 bg-dark">
          <h3 className="fs-5 theme-color text-light">Add Users to Project</h3>
          <input
            type="search"
            className="form-control w-50"
            placeholder="Add User by searching..."
            onChange={searchHandle}
          />
        </div>

        <div className="w-100">
          <div
            className="users-container overflow-auto"
            style={{ height: "54vh" }}
          >
            {userData.map((item) => {
              return (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded shadow me-3"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <img
                          src={imgURL}
                          alt=""
                          className="w-100 h-100 overflow-hidden rounded "
                        />
                      </div>
                      <div>
                        <h3 className="fs-6 m-0">{item.name}</h3>
                        <p className="fs-6 mailto:m-0">{item.email}</p>
                      </div>
                      <br></br>
                    </div>
                    <div>{item.role}</div>
                    <div className="me-4">
                      <button type="button" className="btn btn-outline-danger">
                        {isAdded ? "Remove" : "Add"}
                      </button>
                    </div>
                  </div>
                </>
              );
            })}

            <hr className="my-3 border-secondary border" />
          </div>
        </div>
      </div>

      <div
        className="col-md-10 shadow pt-2 rounded w-48"
        style={{ width: "26%", height: "65vh" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3 p-2 bg-dark">
          <h3 className="fs-5 theme-color text-light">Add Users </h3>
        </div>

        <div className="w-100">
          <div
            className="users-container overflow-auto"
            style={{ height: "54vh" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div
                  className="rounded shadow me-3"
                  style={{ width: "50px", height: "50px" }}
                ></div>
                <div>
                  <h3 className="fs-6 m-0">tamanna</h3>
                  <p className="fs-6 mailto:m-0">tamanna@123</p>
                </div>
              </div>
            </div>

            <hr className="my-3 border-secondary border" />
          </div>
        </div>
      </div>
    </div>
  );
}
