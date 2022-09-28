import React from "react";
import { CSVLink } from "react-csv";
import AdvanceSearch from "./AdvanceSearch";

export default function TableHeader({ props }) {
  return (
    <>
      <div className="d-flex justify-content-between mt-2 px-3 py-1">
        <div>
          <input
            type="search"
            placeholder="Quick Search Here..."
            className="form-control me-3"
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </div>
        <div>
          <AdvanceSearch />
          <button
            style={{ width: "150%" }}
            type="button"
            className="btn btn-outline-secondary rounded-pill"
            data-bs-toggle="modal"
            data-bs-target="#advanceSearch"
          >
            {" "}
            Advance serach
          </button>
        </div>

        <div>
          <CSVLink
            data={props?.selectedProjects}
            filename={"Effectual-RMS-Projects.csv"}
            className="btn btn-success text-light me-3"
            type="button"
          >
            Bibliography
          </CSVLink>
          <CSVLink
            data={props?.projects}
            filename={"Effectual-RMS-Projects.csv"}
            className="btn theme-bg text-light"
            type="button"
          >
            Bibliography All
          </CSVLink>
        </div>
      </div>
    </>
  );
}
