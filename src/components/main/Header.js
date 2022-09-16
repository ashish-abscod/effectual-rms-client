import { Link } from "react-router-dom";
import profile from "../../Assets/Effectual.jpg";
import UpdateUser from "./UpdateUser";
export default function Header({ projectSelected }) {
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
              <li className="nav-item">
                <a
                  className="nav-link active me-2"
                  aria-current="page"
                  href="/main"
                >
                  <i className="bi bi-house-door me-1"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-2" href="/main">
                  <i className="bi bi-activity me-1"></i>Activites
                </a>
              </li>
              {projectSelected ? (
                <li className="nav-item">
                  <Link to={"/comment"} className="nav-link me-2">
                    <i className="bi bi-chat-dots me-1" />
                    Comment
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="/#">
                  <i className="bi bi-key me-1"></i>Password
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="/#" tabIndex="-1">
                  <i className="bi bi-box-arrow-left me-1"></i>Sign Out
                </a>
              </li>
            </ul>
            <div className="dropdown dropstart d-none d-lg-block">
              <span>Hey Ashish Sharma</span>
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
                <li>
                  <UpdateUser />
                  <button className="dropdown-item" type="button">
                    Profile
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Change Password
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
