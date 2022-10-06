import React from "react";

export default function ReviewInformation({ formData }) {
  // console.log(formData)

  return (
    <>
      <div className='row gy-3 gy-md-3 gx-4 row-cols-lg-3 row-cols-md-2 justify-content-evenly overflow-auto' style={{height:"68vh",marginTop:"20px"}}>
        <div className='col-md-6 col-lg-4' style={{ cursor: "pointer" }} >
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Search Object</div>
                <span className='fw-bold theme2-color'>{formData?.SearchObject ? formData?.SearchObject : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Technical Field</div>
                <span className='fw-bold theme2-color'>{formData?.TechnicalField ? formData?.TechnicalField : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Known Prior Art</div>
                <span className='fw-bold theme2-color'>{formData?.KnownPriorArt ? formData?.KnownPriorArt : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Claims to be Searched</div>
                <span className='fw-bold theme2-color'>{formData?.ClaimsToBeSearched ? formData?.ClaimsToBeSearched : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Requirement For Delivery</div>
                <span className='fw-bold theme2-color'>{formData?.RequirementForDelivery ? formData?.RequirementForDelivery : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Requirement Delivery Date</div>
                <span className='fw-bold theme2-color'>{formData?.RequirementDeliveryDate ? formData?.RequirementDeliveryDate : "..."}</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="col-md-6 col-lg-4" style={{ cursor: "pointer" }}>
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Prior Art CuttOff Date</div>
                <span className='fw-bold theme2-color'>{formData?.PriorArtCuttOffDate ? formData?.PriorArtCuttOffDate : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Standard Related</div>
                <span className='fw-bold theme2-color'>{formData?.StandardRelated ? formData?.StandardRelated : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>SSO Needed</div>
                <span className='fw-bold theme2-color'>{formData?.SSONeeded ? formData?.SSONeeded : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>USIPR Special</div>
                <span className='fw-bold theme2-color'>{formData?.USIPRSpecial ? formData?.USIPRSpecial : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Important Claims</div>
                <span className='fw-bold theme2-color'>{formData?.ImportantClaims ? formData?.ImportantClaims : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>UnImportant Claims</div>
                <span className='fw-bold theme2-color'>{formData?.UnimportantClaims ? formData?.UnimportantClaims : "..."}</span>
              </div>
            </li>
          </ol>
        </div>

        <div className="col-md-6 col-lg-4" style={{ cursor: "pointer" }}>
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Uploaded Files</div>
                <span className='fw-bold theme2-color'>{formData?.file ? "File(s) Selected" : "File(s) Not Selected"}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Useful Information For Search</div>
                <div className='fw-bold theme2-color overflow-auto' style={{ maxHeight: "100%" }}>{formData?.UsefulInformationForSearch ? formData?.UsefulInformationForSearch : "..."}</div>
              </div>
            </li>
            {/* <li className="list-group-item overflow-auto tooltips" style={{ maxHeight: "170px", top: "0px" }}>14. <span className='ms-3 fw-bold theme2-color'>{formData?.UsefulInformationForSearch}</span> <span className="tooltiptext">Useful Information For Search</span></li> */}
          </ol>
        </div>
      </div>
    </>
  );
}
