import React from 'react'
import AddNewUser from './AddNewUser'
import SundarPichari from '../Assets/Sundar Pichai.jpg'
export default function ManageUser() {

    // const [deleteUser, setDeleteUser] = useState({
    //     email: "",
    //     name: "",
    //     role: ""
    // })


    return (
        <>
            <div className='container'>
                <div className="row pt-3">
                    <div className="col-md-6">
                        <h3 className='text-center theme-color'>Users List</h3>
                    </div>
                    <div className="col-md-6">
                        <AddNewUser />
                        <button type="button" class="btn btn-outline-secondary rounded-pill w-100" data-bs-toggle="modal" data-bs-target="#addUser">Add New User</button>
                    </div>
                </div>
                <div className='row pt-3'>
                    <div>
                        <div style={{ height: "67vh" }} className="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead className='table-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Photo</th>
                                        <th>User Name</th>
                                        <th>Email Id</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>
                                            <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                                                <img src={SundarPichari} alt="" className='w-100 h-100 overflow-hidden rounded ' />
                                            </div>
                                        </td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                        <td className='text-center'><button type="button" className='btn btn-outline-danger rounded-pill w-50'>Remove</button></td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>
                                            <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                                                <img src={SundarPichari} alt="" className='w-100 h-100 overflow-hidden rounded ' />
                                            </div>
                                        </td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td className='text-center'><button type="button" className='btn btn-outline-danger rounded-pill w-50'>Remove</button></td>

                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>
                                            <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                                                <img src={SundarPichari} alt="" className='w-100 h-100 overflow-hidden rounded ' />
                                            </div>
                                        </td>
                                        <td>Larry the Bird</td>
                                        <td>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td className='text-center'><button type="button" className='btn btn-outline-danger rounded-pill w-50'>Remove</button></td>

                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>
                                            <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                                                <img src={SundarPichari} alt="" className='w-100 h-100 overflow-hidden rounded ' />
                                            </div>
                                        </td>
                                        <td>Larry the Bird</td>
                                        <td>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td className='text-center'><button type="button" className='btn btn-outline-danger rounded-pill w-50'>Remove</button></td>

                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>
                                            <div className='rounded shadow me-3' style={{ width: "50px", height: "50px" }}>
                                                <img src={SundarPichari} alt="" className='w-100 h-100 overflow-hidden rounded ' />
                                            </div>
                                        </td>
                                        <td>Larry the Bird</td>
                                        <td>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td className='text-center'><button type="button" className='btn btn-outline-danger rounded-pill w-50'>Remove</button></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>




            {/* <div className='col-md-5 col-lg-4 neomorphism  p-3 ms-3 pt-2'>
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
                    </div> */}
        </>
    )
}
