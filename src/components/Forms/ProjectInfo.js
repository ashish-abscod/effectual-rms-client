import React, { useState } from "react";
import axios from 'axios';
import { useRef } from "react";

export default function ProjectInfo({ formData, setFormData, setIsDisabled, projectId }) {
    
    return (
        <>
            <div className='row gy-3 gy-md-3 gx-4 row-cols-lg-3 row-cols-md-2 justify-content-evenly'>
                <div className="input-field mt-5">
                    <input type="text" className="form-control" id="searchObject"  required value={formData?.SearchObject}  onChange={(e) => setFormData({ ...formData, SearchObject: e.target.value })} />
                    <label>Search Object:</label>
                    
                </div>
                <div className="input-field mt-5">
                    <input type="text" className="form-control" required value={formData?.TechnicalField}
                        onChange={(e) => setFormData({ ...formData, TechnicalField: e.target.value })} />
                    <label>Technical Field:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
                <div className="input-field mt-5">
                    <input type="text" className="form-control" required value={formData?.KnownPriorArt}
                        onChange={(e) => setFormData({ ...formData, KnownPriorArt: e.target.value })} />
                    <label>Known prior art:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
                <div className="input-field">
                    <input type="text" className="form-control" required value={formData?.ClaimsToBeSearched} onChange={(e) => setFormData({ ...formData, ClaimsToBeSearched: e.target.value })} />
                    <label>Claims to be searched:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
                <div className="input-field">
                    <input type="text" className="form-control" required value={formData?.RequirementForDelivery} onChange={(e) => setFormData({ ...formData, RequirementForDelivery: e.target.value })} />
                    <label>Requirement for delivery:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
                <div className="input-field">
                    <input type="date" className="form-control" required value={formData?.RequirementDeliveryDate} onChange={(e) => setFormData({ ...formData, RequirementDeliveryDate: e.target.value })} />
                    <label>Requirement delivery date:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
                <div className="input-field">
                    <input type="date" className="form-control" required value={formData?.PriorArtCuttOffDate} onChange={(e) => setFormData({ ...formData, PriorArtCuttOffDate: e.target.value })} />
                    <label>Prior Art Cutt-Off date:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
                <div className="input-field">
                    <input type="text" className="form-control" required value={formData?.StandardRelated} onChange={(e) => setFormData({ ...formData, StandardRelated: e.target.value })} />
                    <label>Standard related:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>

                </div>
                <div className="input-field">
                    <input type="text" className="form-control" required value={formData?.SSONeeded} onChange={(e) => setFormData({ ...formData, SSONeeded: e.target.value })} />
                    <label>SSO needed:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
                <div className="input-field">
                    <textarea type="text" className="form-control" rows="4" required value={formData?.USIPRSpecial} onChange={(e) => setFormData({ ...formData, USIPRSpecial: e.target.value })} />
                    <label> US IPR Special:</label>
                    <span className='d-none text-danger' >Error : Field Required</span>
                </div>
                <div className="input-field">
                    <textarea type="text" className="form-control" rows="4" required value={formData?.ImportantClaims} onChange={(e) => setFormData({ ...formData, ImportantClaims: e.target.value })} />
                    <label>Importand Claims (max 5) :</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
                <div className="input-field">
                    <textarea type="text" className="form-control" rows="4" id="unimportant" required value={formData?.UnimportantClaims} onChange={(e) => setFormData({ ...formData, UnimportantClaims: e.target.value })} />
                    <label>Unimportant claims:</label>
                    <span className='d-none text-danger'>Error : Field Required</span>
                </div>
            </div>
        </>
    )
}