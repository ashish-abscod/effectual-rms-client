import React from 'react'
import ashish from '../../../Assets/Ashish-Sharma.jpg';
import FileViewer from './FileViewer';
export default function CommentInbox() {
    return (
        <>
            <section className='container commentInbox py-3 h-100 overflow-auto'>

                <div className='row parent-wrapper position-relative bg-light py-2 border-top border-bottom mb-3'>

                    <div className='parent-profile col-2 col-md-1'>
                        <img src={ashish} alt="Ashish" width={45} height={45} className='border rounded-circle' />
                    </div>
                    <div className='parent-profile-info col-10 col-md-11 position-absolute' style={{ fontSize: "14px", left: "4em" }}>
                        <span className='name text-primary fw-normal'>Ashish Sharma</span> - <span>posted 1 d ago</span>
                        <span className='designation d-block text-secondary'>Developer Effectual</span>
                    </div>

                    <div className='child-wrapper col-md-12 ps-md-5'>
                        <div className='comment'>
                            <div className='ms-md-3' >
                                Ashish sharma

                                Thank You eli excepteur qui sit do ullamco nulla consequat sit laboris. Qui sunt excepteur in adipisicing ea tempor laborum. Laboris veniam sint Lorem in incididunt elit. Ea voluptate dolor eu reprehenderit in ad. Commodo Lorem ipsum qui cupidpatat proident labore qui consequat. Ut consequat id duis esse nostrud commodo ea enim officia minim. Culpa consequat tempor nisi officia minim tempor ut.
                            </div>
                            <div className='files overflow-auto text-center d-flex justify-content-center align-items-center py-3'>
                                <div className='border-bottom w-25 border-3 d-none d-md-block'></div>
                                <FileViewer />
                                <button type="button" class="btn btn-outline-primary rounded-pill me-3 me-md-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Preview Files</button>
                                <div className='border-bottom border-3 d-none d-md-block' style={{ width: "5%" }}></div>
                                <button type="button" className='btn btn-outline-primary rounded-pill px-3'>Reply Back</button>
                                <div className='border-bottom w-25 border-3 d-none d-md-block'></div>
                            </div>
                        </div>

                        <div className='replies-container ps-4 ps-md-0'>
                            <div className='row replie pb-4 position-relative'>

                                <div className='replie-profile col-2 col-md-1'>
                                    <img src={ashish} alt="Ashish" width={45} height={45} className='border rounded-circle' />
                                </div>
                                <div className='replie-profile-info col-10 col-md-11 position-absolute' style={{ fontSize: "14px", left: "4em" }}>
                                    <span className='name text-primary fw-normal'>Ashish Sharma</span> - <span>replied 3 h ago</span>
                                    <span className='designation d-block text-secondary'>Developer Effectual</span>
                                </div>
                                <div className='replie-content d-flex align-items-center flex-column flex-md-row'>
                                    <div className='replie-txt me-md-3 w-75 ms-md-5'>
                                        Veniam nulla anim consequat culpa do Lorem id cupidatat incididunt esse esse nostrud.Sit cupidatat exercitation deserunt pariatur occaecat enim enim do proident et incididunt adipisicing. Laboris dolor fugiat consectetur dolor tempor veniam cillum reprehenderit ipsum. Dolore ea nulla incididunt proident occaecat adipisicing officia voluptate nulla. Irure nulla et mollit laboris. Esse anim proident velit eu culpa velit magna eiusmod do anim proident et. Do duis quis minim fugiat nulla ipsum et magna.
                                    </div>
                                    <div className=''>
                                        <FileViewer />
                                        <button type="button" class="btn btn-outline-primary rounded-pill me-3 me-md-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Preview Files</button>
                                    </div>
                                </div>
                            </div>

                            <div className='row replie pb-4 position-relative'>

                                <div className='replie-profile col-2 col-md-1'>
                                    <img src={ashish} alt="Ashish" width={45} height={45} className='border rounded-circle' />
                                </div>
                                <div className='replie-profile-info col-10 col-md-11 position-absolute' style={{ fontSize: "14px", left: "4em" }}>
                                    <span className='name text-primary fw-normal'>Ashish Sharma</span> - <span>replied 3 h ago</span>
                                    <span className='designation d-block text-secondary'>Developer Effectual</span>
                                </div>
                                <div className='replie-content d-flex align-items-center flex-column flex-md-row'>
                                    <div className='replie-txt me-md-3 w-75 ms-md-5'>
                                        Veniam nulla anim consequat culpa do Lorem id cupidatat incididunt esse esse nostrud.
                                    </div>
                                    <div className=''>
                                        <FileViewer />
                                        <button type="button" class="btn btn-outline-primary rounded-pill me-3 me-md-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Preview Files</button>
                                    </div>
                                </div>

                            </div>

                            <div className='row replie pb-4 position-relative'>

                                <div className='replie-profile col-2 col-md-1'>
                                    <img src={ashish} alt="Ashish" width={45} height={45} className='border rounded-circle' />
                                </div>
                                <div className='replie-profile-info col-10 col-md-11 position-absolute' style={{ fontSize: "14px", left: "4em" }}>
                                    <span className='name text-primary fw-normal'>Ashish Sharma</span> - <span>replied 3 h ago</span>
                                    <span className='designation d-block text-secondary'>Developer Effectual</span>
                                </div>
                                <div className='replie-content d-flex align-items-center flex-column flex-md-row'>
                                    <div className='replie-txt me-md-3 w-75 ms-md-5'>
                                        Veniam nulla anim consequat culpa do Lorem id cupidatat incididunt esse esse nostrud.Sit cupidatat exercitation deserunt pariatur occaecat enim enim do proident et incididunt adipisicing. Laboris dolor fugiat consectetur dolor tempor veniam cillum reprehenderit ipsum. Dolore ea nulla incididunt proident occaecat adipisicing officia voluptate nulla. Irure nulla et mollit laboris. Esse anim proident velit eu culpa velit magna eiusmod do anim proident et. Do duis quis minim fugiat nulla ipsum et magna.
                                    </div>
                                    <div className=''>
                                        <FileViewer />
                                        <button type="button" class="btn btn-outline-primary rounded-pill me-3 me-md-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Preview Files</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}
