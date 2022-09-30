import React, { useContext, useState } from "react";
import AddUserToProject from "./AddUserToProject";
import ProjectInfo from "./ProjectInfo";
import ReviewInformation from "./ReviewInformation";
import UploadFiles from "./UploadFiles";
import { ProjectContext } from "../contexts/ProjectContext";
import axios from "axios";
import { useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export default function CreateProject() {
  const [page, setPage] = useState(0);
  const { projectId,setProjectId } = useContext(ProjectContext);
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    SearchObject: "",
    TechnicalField: "",
    KnownPriorArt: "",
    ClaimsToBeSearched: "",
    RequirementForDelivery: "",
    RequirementDeliveryDate: "",
    PriorArtCuttOffDate: "",
    StandardRelated: "",
    SSONeeded: "",
    USIPRSpecial: "",
    ImportantClaims: "",
    UnimportantClaims: "",
    UsefulInformationForSearch: "",
    file: "",
    assignedUsers: [],
  });


  const getProjects = async () => {
    if (projectId !== null) {
      try {
        const res = await axios.get(
          `http://localhost:8080/projects/${projectId}`
        );
        console.log(res.data);
        setFormData({
          ...formData,
          SearchObject: res.data.searchObject ? res.data.searchObject : "",
          TechnicalField: res.data.technicalField ? res.data.technicalField: "",
          KnownPriorArt : res.data.patentNumber ? res.data.patentNumber : "",
          ClaimsToBeSearched: res.data.claims ? res.data.claims : "",
          RequirementForDelivery: res.data.reqDelivery ? res.data.reqDelivery: "",
          RequirementDeliveryDate: res.data.deliveryDate? res.data.deliveryDate: "",
          PriorArtCuttOffDate: res.data.priorArtDate? res.data.priorArtDate: "",
          StandardRelated: res.data.standard ? res.data.standard : "",
          SSONeeded: res.data.sso ? res.data.sso : "",
          USIPRSpecial: res.data.usipr ? res.data.usipr : "",
          ImportantClaims: res.data.impClaim ? res.data.impClaim : "",
          UnimportantClaims: res.data.nonImpClaim ? res.data.nonImpClaim : "",
          UsefulInformationForSearch: res.data.info ? res.data.info : "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  //getting project based on id
  useEffect(() => {
    getProjects();
  }, [projectId]);

  const FormTitles = [
    "Project Information",
    "Upload Files",
    "Add Users",
    "Review Information",
  ];

  const PageDisplay = () => {
    let returnvalue;
    switch (page) {
      case 0:
        returnvalue = (
          <ProjectInfo formData={formData} setFormData={setFormData} />
        );
        break;
      case 1:
        returnvalue = (
          <UploadFiles formData={formData} setFormData={setFormData} />
        );
        break;
      case 2:
        returnvalue = (
          <AddUserToProject formData={formData} setFormData={setFormData} />
        );
        break;
      case 3:
        returnvalue = (
          <ReviewInformation formData={formData} setFormData={setFormData} />
        );
        break;
      default:
        returnvalue = null;
        break;
    }
    return returnvalue;
  };

  //----------------Handler for Project Creation and Updation---------------
  const projectHandler = async () => {
    if (projectId === null) {
      try {
        const res = await axios.post(
          "http://localhost:8080/projects/create",
          formData
        );
        const info = await axios.post("http://localhost:8080/files", formData);
        console.log(res);
        let data = await axios.post(
          "http://localhost:8080/assigned/createUser",
          {
            userId: formData?.assignedUsers,
            projectId: res?.data?.data?.projectId,
            assignedBy: user.userData._id,
          }
        );

      } catch (error) {
        console.log(error);
      }
      //clear FormData Completely after creating project
      setFormData(null);
    } else if (projectId !== null) {
      try {
        const res = await axios.put(
          `http://localhost:8080/projects/update/${projectId}`,
          formData
        );

        const resp = await axios.put(
          `http://localhost:8080/assigned/updateUser/${projectId}`, formData?.assignedUsers
        );
        // clear assignedUsers from formdata after updation complete
        setFormData({...formData, assignedUsers: []});
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <>
      <div className="container p-4 pt-1">
        <div className="row pt-2">
          <div
            className="col-12 col-md-8 progress p-0"
            style={{ marginTop: "7px", height: "2rem" }}
          >
            <div
              className="progress-bar theme-bg fw-bold fs-6"
              role="progressbar"
              style={{
                width:
                  page === 0
                    ? "25%"
                    : page === 1
                    ? "50%"
                    : page === 2
                    ? "75%"
                    : "100%",
              }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Step {page + 1}/4
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-end mt-1">
            <button
              type="button"
              className="btn btn-secondary rounded-pill w-50 me-3 form"
              onClick={() => setPage((current) => current - 1)}
              disabled={page === 0}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-success rounded-pill w-50 form"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  projectHandler();
                } else {
                  setPage((current) => current + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}{" "}
            </button>
          </div>
        </div>

        <div>{PageDisplay()}</div>
      </div>
    </>
  );
}
