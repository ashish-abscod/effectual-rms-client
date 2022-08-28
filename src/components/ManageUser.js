import React, { useState } from 'react'

export default function ManageUser() {

    const [addUser, setAddUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ""
    })

    const [deleteUser, setDeleteUser] = useState({
        email: "",
        name : "",
        role: ""
    })


    return (
        <>
            <div className='container'>
                <div className='row pt-5 justify-content-evenly'>
                    <div className='col-md-5 col-lg-4 neomorphism  p-3 ms-3 pt-2'>
                        <div>
                            <h4 className='text-center theme-color mb-4'>Add User</h4>
                        </div>

                        <div className="input-field ">
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

                        <div className='d-flex justify-content-evenly mt-3'>
                            <button type="button" className='btn theme-bg text-white rounded-pill me-3'>Add User</button>
                            <button type="button" className='btn btn-secondary rounded-pill' onClick={()=>setAddUser({...addUser,name:"",email:"",password:"",confirmPassword:"",role:""}) }>Cancel</button>
                        </div>
                    </div>

                    <div className='col-md-5 col-lg-4 neomorphism p-3 ms-3 pt-2 position-relative'>
                        <div>
                            <h4 className='text-center theme-color mb-4'>Delete User</h4>
                        </div>
                        
                        <div className="input-field">
                            <input type="text" className="form-control" id="inputPassword4" required value={deleteUser.name} onChange={(e) => setDeleteUser({ ...deleteUser, name: e.target.value })} />
                            <label>Email:</label>
                            <span className='d-none'>Error : Field Required</span>
                        </div>
                        <div className="input-field">
                            <input type="text" className="form-control" id="inputPassword4" required value={deleteUser.email} onChange={(e) => setDeleteUser({ ...deleteUser, email: e.target.value })} />
                            <label>Name:</label>
                            <span className='d-none'>Error : Field Required</span>
                        </div>
                        <div className="input-field">
                            <input type="text" className="form-control" id="inputPassword4" required value={deleteUser.role} onChange={(e) => setDeleteUser({ ...deleteUser, role: e.target.value })} />
                            <label>Role:</label>
                            <span className='d-none'>Error : Field Required</span>
                        </div>
                        <div className='d-flex position-absolute start-50 translate-middle-x' style={{bottom:"20px"}}>
                            <button type="button" className='btn theme-bg text-white rounded-pill me-5 text-nowrap'>Delete User</button>
                            <button type="button" className='btn btn-secondary rounded-pill'  onClick={()=>setDeleteUser({...deleteUser,name:"",email:"",role:""}) }>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
