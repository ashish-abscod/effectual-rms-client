import { useContext } from "react";
import profile from "../../Assets/Effectual.jpg";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import { BiUserCircle, BiLogOut } from "react-icons/bi";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top text-white theme-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/main">
            <b>Effectual RMS</b>
          </a>
          <button
            className="navbar-toggler rounded-circle overflow-hidden p-0"
            style={{ width: "2em", height: "2em" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src={profile}
              style={{ width: "2em", height: "2em" }}
              title="Profile"
              alt="Profile"
            />
          </button>
          <div
            className="collapse navbar-collapse ms-lg-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item"
                onClick={() => {
                  navigate("/main");
                }}
              >
                <button
                  className="nav-link active me-2 p-0 bg-transparent border-0 text-white "
                  aria-current="page"
                >
                  <i className="bi bi-house-door me-1"></i>Home
                </button>
              </li>
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="/#" tabIndex="-1">
                  <i className="bi bi-box-arrow-left me-1"></i>Sign Out
                </a>
              </li>
            </ul>
            <div className="dropdown dropstart d-none d-lg-block">
              <span
                className="fw-bold me-2"
                id="dropdownMenu1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                {user?.userData?.name}
              </span>
              <button
                className="btn rounded-circle overflow-hidden p-0 ms-1 dropdown-toggle"
                style={{ width: "2em", height: "2em" }}
                type="button"
                id="dropdownMenu1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profile}
                  style={{ width: "2em", height: "2em" }}
                  title="Profile"
                  alt="Profile"
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenu1"
                style={{ top: "30px", right: "15%" }}
              >
                <li className="mb-2">
                  <button
                    className="dropdown-item ps-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#changeProfile"
                  >
                    <BiUserCircle className="fs-5 me-2" /> Profile
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item ps-2"
                    type="button"
                    onClick={() => {
                      setUser({
                        ...user,
                        auth: false,
                        userData: "",
                        token: null,
                      });
                      localStorage.clear();
                      navigate("/");
                    }}
                  >
                    <BiLogOut className="fs-5 me-2" /> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <UpdateUser />
    </>
  );
}
