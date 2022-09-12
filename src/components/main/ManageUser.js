import React from 'react'
import AddNewUser from './AddNewUser'
import SundarPichari from '../../Assets/Sundar Pichai.jpg'
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
                        <button type="button" className="btn btn-outline-secondary rounded-pill w-100" data-bs-toggle="modal" data-bs-target="#addUser">Add New User</button>
                    </div>
                </div>
                <div className='row pt-3'>
                    <div>
                        <div style={{ height: "67vh" }} className="table-responsive">
                            <table className="table table-bordered table-striped">
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
        </>
    )
}
