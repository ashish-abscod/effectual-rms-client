import React from "react";

export default function ReviewInformation({ formData }) {
  // console.log(formData)

  return (
    <>
      <div className="row gy-3 gy-md-3 gx-4 pt-3 row-cols-lg-3 row-cols-md-2 justify-content-evenly">
        <div className="col-md-6 col-lg-4" style={{ cursor: "pointer" }}>
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Search Object</div>
                <span className="fw-bold theme-color">
                  {formData?.SearchObject ? formData?.SearchObject : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Technical Field</div>
                <span className="fw-bold theme-color">
                  {formData?.TechnicalField ? formData?.TechnicalField : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Known Prior Art</div>
                <span className="fw-bold theme-color">
                  {formData?.KnownPriorArt ? formData?.KnownPriorArt : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Claims to be Searched</div>
                <span className="fw-bold theme-color">
                  {formData?.ClaimsToBeSearched
                    ? formData?.ClaimsToBeSearched
                    : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Requirement For Delivery</div>
                <span className="fw-bold theme-color">
                  {formData?.RequirementForDelivery
                    ? formData?.RequirementForDelivery
                    : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Requirement Delivery Date</div>
                <span className="fw-bold theme-color">
                  {formData?.RequirementDeliveryDate
                    ? formData?.RequirementDeliveryDate
                    : "..."}
                </span>
              </div>
            </li>
          </ol>
        </div>

        <div className="col-md-6 col-lg-4" style={{ cursor: "pointer" }}>
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Prior Art CuttOff Date</div>
                <span className="fw-bold theme-color">
                  {formData?.PriorArtCuttOffDate
                    ? formData?.PriorArtCuttOffDate
                    : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Standard Related</div>
                <span className="fw-bold theme-color">
                  {formData?.StandardRelated
                    ? formData?.StandardRelated
                    : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>SSO Needed</div>
                <span className="fw-bold theme-color">
                  {formData?.SSONeeded ? formData?.SSONeeded : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>USIPR Special</div>
                <span className="fw-bold theme-color">
                  {formData?.USIPRSpecial ? formData?.USIPRSpecial : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Important Claims</div>
                <span className="fw-bold theme-color">
                  {formData?.ImportantClaims
                    ? formData?.ImportantClaims
                    : "..."}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>UnImportant Claims</div>
                <span className="fw-bold theme-color">
                  {formData?.UnimportantClaims
                    ? formData?.UnimportantClaims
                    : "..."}
                </span>
              </div>
            </li>
          </ol>
        </div>

        <div className="col-md-6 col-lg-4" style={{ cursor: "pointer" }}>
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Uploaded Files</div>
                <span className="fw-bold theme-color">
                  {formData.file ? "File(s) Selected" : "File(s) Not Selected"}
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div>Useful Information For Search</div>
                <div
                  className="fw-bold theme-color overflow-auto"
                  style={{ maxHeight: "100%" }}
                >
                  {formData?.UsefulInformationForSearch
                    ? formData?.UsefulInformationForSearch
                    : "..."}
                </div>
              </div>
            </li>
            {/* <li className="list-group-item overflow-auto tooltips" style={{ maxHeight: "170px", top: "0px" }}>14. <span className='ms-3 fw-bold theme-color'>{formData?.UsefulInformationForSearch}</span> <span className="tooltiptext">Useful Information For Search</span></li> */}
          </ol>
        </div>
      </div>
    </>
  );
}
