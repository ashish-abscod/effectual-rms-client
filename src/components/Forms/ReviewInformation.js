import React from 'react'

export default function ReviewInformation({ formData }) {

  return (
    <>
      <div className='col-md-6 col-md-4' style={{ cursor: "pointer" }} >
        <ul className="list-group list">
          <li className="list-group-item tooltips">1. <span className='ms-3 fw-bold theme-color'>{formData.SearchObject}</span> <span className="tooltiptext">Search Object</span> </li>
          <li className="list-group-item tooltips">2. <span className='ms-3 fw-bold theme-color'>{formData.TechnicalField} </span> <span className="tooltiptext">Technical Field</span></li>
          <li className="list-group-item tooltips">3. <span className='ms-3 fw-bold theme-color'>{formData.KnownPriorArt}</span> <span className="tooltiptext">Known Prior Art</span></li>
          <li className="list-group-item tooltips">4. <span className='ms-3 fw-bold theme-color'>{formData.ClaimsToBeSearched}</span> <span className="tooltiptext">Claims To Be Searched</span></li>
          <li className="list-group-item tooltips">5. <span className='ms-3 fw-bold theme-color'>{formData.RequirementForDelivery}</span> <span className="tooltiptext">Requirement For Delivery</span></li>
          <li className="list-group-item tooltips">6. <span className='ms-3 fw-bold theme-color'>{formData.RequirementDeliveryDate}</span> <span className="tooltiptext">Requirement Delivery Date</span></li>
          <li className="list-group-item tooltips">7. <span className='ms-3 fw-bold theme-color'>{formData.PriorArtCuttOffDate}</span> <span className="tooltiptext">Prior Art Cutt Off Date</span></li>
          <li className="list-group-item tooltips">8. <span className='ms-3 fw-bold theme-color'>{formData.StandardRelated}</span> <span className="tooltiptext">Standard Related</span></li>
          <li className="list-group-item tooltips">9. <span className='ms-3 fw-bold theme-color'>{formData.SSONeeded}</span> <span className="tooltiptext">SSO Needed</span></li>
          <li className="list-group-item tooltips">10. <span className='ms-3 fw-bold theme-color'>{formData.USIPRSpecial}</span> <span className="tooltiptext">US IPR Special</span></li>
        </ul>
      </div>
      <div className='col-md-6 col-md-4' style={{ cursor: "pointer" }}>
        <ul className="list-group list">
          <li className="list-group-item tooltips">11. <span className='ms-3 fw-bold theme-color'>{formData.ImportantClaims}</span> <span className="tooltiptext">Important Claims</span></li>
          <li className="list-group-item tooltips">12. <span className='ms-3 fw-bold theme-color'>{formData.UnimportantClaims}</span> <span className="tooltiptext">Unimportant Claims</span></li>
          <li className="list-group-item tooltips">13. <span className='ms-3 fw-bold theme-color'>{formData.ChooseFile.name}</span> <span className="tooltiptext">File Name</span></li>
          <li className="list-group-item overflow-auto tooltips" style={{ maxHeight: "170px", top: "0px" }}>14. <span className='ms-3 fw-bold theme-color'>{formData.UsefulInformationForSearch}</span> <span className="tooltiptext">Useful Information For Search</span></li>
        </ul>
      </div>
    </>
  )
}
