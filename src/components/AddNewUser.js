import { useState } from 'react'
import SundarPichari from '../Assets/Sundar Pichai.jpg'
export default function AddNewUser() {

    const [addUser, setAddUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ""
    })

    return (
        <>
            <div className="modal fade" id="addUser" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center theme-color" id="addUserLabel">Add New User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className='col-md-8'>
                                        <div className="input-field mt-0 ">
                                            <input type="text" className="form-control" id="inputPassword4" required value={addUser.name} onChange={(e) => setAddUser({ ...addUser, name: e.target.value })} />
                                            <label>Name:</label>
                                            <span className='d-none'>Error : Field Required</span>
                                        </div>
                                        <div className="input-field">
                                            <input type="text" className="form-control" id="inputPassword4" required value={addUser.email} onChange={(e) => setAddUser({ ...addUser, email: e.target.value })} />
                                            <label>Email:</label>
                                            <span className='d-none'>Error : Field Required</span>
                                        </div>
                                        <div className="input-field">
                                            <input type="text" className="form-control" id="inputPassword4" required value={addUser.password} onChange={(e) => setAddUser({ ...addUser, password: e.target.value })} />
                                            <label>Password:</label>
                                            <span className='d-none'>Error : Field Required</span>
                                        </div>
                                        <div className="input-field">
                                            <input type="text" className="form-control" id="inputPassword4" required value={addUser.confirmPassword} onChange={(e) => setAddUser({ ...addUser, confirmPassword: e.target.value })} />
                                            <label>Confirm Password:</label>
                                            <span className='d-none'>Error : Field Required</span>
                                        </div>
                                        <div className="input-field">
                                            <input type="text" className="form-control" id="inputPassword4" required value={addUser.role} onChange={(e) => setAddUser({ ...addUser, role: e.target.value })} />
                                            <label>Role:</label>
                                            <span className='d-none'>Error : Field Required</span>
                                        </div>
                                    </div>
                                    <div className='col-md-4 mt-4'>
                                        <input type="file" className='form-control'></input>
                                        <div className='mt-3'>
                                            <img src={SundarPichari} alt="" className='mw-100'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
                            <div className=''>
                                <button type="button" className='btn btn-secondary rounded-pill me-3' onClick={() => setAddUser({ ...addUser, name: "", email: "", password: "", confirmPassword: "", role: "" })}>Clear</button>
                                <button type="button" className='btn theme-bg text-white rounded-pill'>Add User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
