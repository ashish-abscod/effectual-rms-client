import React from 'react'
import {BsCheckCircleFill} from "react-icons/bs";

export default function ReviewInformation({ formData,fileNames }) {

  return (
    <>
      <div className='row gy-3 gy-md-3 gx-4 row-cols-lg-3 row-cols-md-2 justify-content-evenly overflow-auto' style={{ height: "68vh", marginTop: "20px" }}>
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

        <div className='col-md-6 col-lg-4' style={{ cursor: "pointer" }}>
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Prior Art CuttOff Date</div>
                <span className='fw-bold theme2-color text-break'>{formData?.PriorArtCuttOffDate ? formData?.PriorArtCuttOffDate : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Standard Related</div>
                <span className='fw-bold theme2-color text-break'>{formData?.StandardRelated ? formData?.StandardRelated : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>SSO Needed</div>
                <span className='fw-bold theme2-color text-break'>{formData?.SSONeeded ? formData?.SSONeeded : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>USIPR Special</div>
                <span className='fw-bold theme2-color text-break'>{formData?.USIPRSpecial ? formData?.USIPRSpecial : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Important Claims</div>
                <span className='fw-bold theme2-color text-break'>{formData?.ImportantClaims ? formData?.ImportantClaims : "..."}</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>UnImportant Claims</div>
                <span className='fw-bold theme2-color text-break'>{formData?.UnimportantClaims ? formData?.UnimportantClaims : "..."}</span>
              </div>
            </li>
          </ol>
        </div>

        <div className='col-md-6 col-lg-4' style={{ cursor: "pointer" }}>
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Uploaded Files</div>
                <div className="mt-3 overflow-auto" style={{ maxHeight: "50vh" }}>
                  <ul className='p-0'> 
                  {
                    fileNames?.map((fileName, i) =>
                      <li key={i} className="text-success list-unstyled d-block text-truncate" style={{ maxWidth: "20rem" }} ><BsCheckCircleFill color="green" /> <span className="">{fileName}</span></li>
                    )
                  }
                  </ul>
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className='fw-bold theme3-color'>Useful Information For Search</div>
                <div className='fw-bold theme2-color overflow-auto text-wrap text-break' style={{ maxHeight: "100%" }}>{formData?.UsefulInformationForSearch ? formData?.UsefulInformationForSearch : "..."}</div>
              </div>
            </li>
          </ol>

        </div>
        
        {/* <div className='col-lg-8 float-start' style={{ cursor: "pointer"}}>
          <ol className="list-group">
            <li className="list-group-item">
              <h5 className='fw-bold theme3-color'>New Assgined Users:</h5>
              <table className="table mt-3 table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {formData?.assignedUsers?.map((item, i) => {
                    return (
                      <tr className="mb-2" key={i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </li>
          </ol>
        </div> */}

      </div>
    </>
  )
}