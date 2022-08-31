import React, { useState } from "react";
import AddUserToProject from "./AddUserToProject";
import ProjectInfo from "./ProjectInfo";
import ReviewInformation from "./ReviewInformation";
import UploadFiles from "./UploadFiles";

export default function CreateProject() {

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    SearchObject : "",
    TechnicalField : "",
    KnownPriorArt : "",
    ClaimsToBeSearched : "",
    RequirementForDelivery : "",
    RequirementDeliveryDate : "",
    PriorArtCuttOffDate: "",
    ChooseFile: {},
    StandardRelated : "",
    SSONeeded: "",
    USIPRSpecial: "",
    ImportantClaims : "", 
    UnimportantClaims : "",
    UsefulInformationForSearch: "" 
  })


  const FormTitles = ["Project Information", "Upload Files", "Add Users", "Review Information"];

  const PageDisplay = () => {
    let returnvalue;
    switch (page) {
      case 0:
        returnvalue = (<ProjectInfo formData={formData} setFormData={setFormData} />)
        break;
      case 1:
        returnvalue = (<UploadFiles formData={formData} setFormData={setFormData} />)
        break
      case 2:
        returnvalue = (<AddUserToProject formData={formData} setFormData={setFormData} />)
        break;
      case 3:
        returnvalue = (<ReviewInformation formData={formData} setFormData={setFormData} />)
        break;
      default:
        returnvalue = null;
        break;
    }
    return returnvalue;
  }

  return (
    <>
      <div className="container p-4 pt-1">
        <div className='row'>
          <div className="col-12 col-md-8 progress p-0" style={{ marginTop: "7px",height:"2rem" }}>
            <div className="progress-bar theme-bg fw-bold fs-6" role="progressbar" style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Step {page + 1}/4</div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-end mt-1">
            <button type="button" className="btn btn-secondary rounded-pill w-50 me-3 form" onClick={() => setPage((current) => current - 1)} disabled={page === 0}>Previous</button>
            <button type="button" className="btn btn-success rounded-pill w-50 form" onClick={() => {if(page === FormTitles.length - 1 ) {alert("Successfully Submitted")}else{setPage((current) => current + 1)}}}>{page === FormTitles.length - 1 ? "Submit" : "Next"} </button>
          </div>
        </div>

        <div className="row gy-3 gy-md-3 gx-4 mt-3 row-cols-lg-3 row-cols-md-2 justify-content-evenly">
          {PageDisplay()}
        </div>


      </div>
    </>
  )
}
