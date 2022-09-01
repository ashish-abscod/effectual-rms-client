import React from 'react'

export default function ReviewInformation({ formData }) {

  return (
    <>
      <div className='col-md-6 col-lg-4' style={{ cursor: "pointer" }} >
        <ol class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Search Object</div>
              <span className='fw-bold theme-color'>{formData.SearchObject}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Technical Field</div>
              <span className='fw-bold theme-color'>{formData.TechnicalField}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Known Prior Art</div>
              <span className='fw-bold theme-color'>{formData.KnownPriorArt}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Claims to be Searched</div>
              <span className='fw-bold theme-color'>{formData.ClaimsToBeSearched}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Requirement For Delivery</div>
              <span className='fw-bold theme-color'>{formData.RequirementForDelivery}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Requirement Delivery Date</div>
              <span className='fw-bold theme-color'>{formData.RequirementDeliveryDate}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Prior Art CuttOff Date</div>
              <span className='fw-bold theme-color'>{formData.PriorArtCuttOffDate}</span>
            </div>
          </li>
        </ol>
      </div>

      <div className='col-md-6 col-lg-4' style={{ cursor: "pointer" }}>
        <ol class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Standard Related</div>
              <span className='fw-bold theme-color'>{formData.StandardRelated}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>SSO Needed</div>
              <span className='fw-bold theme-color'>{formData.SSONeeded}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>USIPR Special</div>
              <span className='fw-bold theme-color'>{formData.USIPRSpecial}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Important Claims</div>
              <span className='fw-bold theme-color'>{formData.ImportantClaims}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>UnImportant Claims</div>
              <span className='fw-bold theme-color'>{formData.UnimportantClaims}</span>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Uploaded Files</div>
              <span className='fw-bold theme-color'>{formData.ChooseFile[0]?.name ? "File(s) Selected" : "File(s) Not Selected"}</span>
            </div>
          </li>
        </ol>
      </div>

      <div className='col-md-6 col-lg-4' style={{ cursor: "pointer" }}>
        <ol class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div>Useful Information For Search</div>
              <div className='fw-bold theme-color overflow-auto' style={{ maxHeight: "100%"}}>{formData.UsefulInformationForSearch}</div>
            </div>
          </li>
          {/* <li className="list-group-item overflow-auto tooltips" style={{ maxHeight: "170px", top: "0px" }}>14. <span className='ms-3 fw-bold theme-color'>{formData.UsefulInformationForSearch}</span> <span className="tooltiptext">Useful Information For Search</span></li> */}
        </ol>
      </div>
    </>
  )
}
