import React from 'react'

export default function FileManger() {
    return (
        <>
            <div className='container'>
                <div className='row row-cols-md-2 pt-4 '>
                    <div>
                        <h5 className='text-center theme-color'>
                            Client Reports
                        </h5>
                        <div style={{height:"70vh"}} className="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead className='table-dark'>
                                <tr>
                                    <th>File</th>
                                    <th>Uploaded By</th>
                                    <th>Uploaded On</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Larry the Bird</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Larry the Bird</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Larry the Bird</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <div>
                        <h5 className='text-center theme-color'>
                            Effectual Reports
                        </h5>
                        <div style={{height:"70vh"}} className="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead className='table-dark'>
                                <tr>
                                    <th>File</th>
                                    <th>Uploaded By</th>
                                    <th>Uploaded On</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Larry the Bird</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
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
