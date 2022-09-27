import React from 'react'
import features from "../../Assets/img/features.png"
import { BiInfoCircle,BiSearch,BiUserCircle,BiExport } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import {MdAddCircleOutline} from 'react-icons/md'
import {BiComment} from 'react-icons/bi'
export default function Features() {
    return (
        <>
            <section className="ld features" id="features">
                <div className="container">
                    <div className="row">
                        <h1 className='theme3-color fw-bold m-auto text-center mb-5'>Effectual RMS Features</h1>

                        <div className="row">

                            <div className="col-xl-4 text-center">
                                <img src={features} className="img-fluid p-4" alt="" />
                            </div>

                            <div className="col-xl-8 d-flex content">
                                <IconContext.Provider value={{
                                    style: {
                                        color: "#4154f1",
                                        fontSize: "60px",
                                        marginRight: "15px",
                                        paddingBottom:"30px"
                                    }
                                }}>
                                    <div className="row align-self-center gy-4">

                                        <div className="col-md-6 d-flex">
                                            <BiInfoCircle/>
                                            <div>
                                                <h4> Easy To Use</h4>
                                                <p>The request form is easy to use and requires minimal information.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex">
                                            <MdAddCircleOutline/>
                                            <div>
                                                <h4>New Request</h4>
                                                <p>Generate a new request instantly which is automatically redirected to Effectual Services.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex">
                                            <BiComment/>
                                            <div className='ps-2'>
                                                <h4>Comment Feature</h4>
                                                <p>Platform offers a comment feature that enables you to reach everyone associated with a project.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex">
                                                <BiSearch/>
                                            <div>
                                                <h4>Quick Search</h4>
                                                <p>Searchable interface allows you to search for any project using various parameters.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex">
                                            <BiUserCircle/>
                                            <div>
                                                <h4>Add Users</h4>
                                                <p>More users can be directly created by the administrator on the platform.</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex">
                                            <BiExport/>
                                            <div  className='pe-5'>
                                                <h4>Export Reports</h4>
                                                <p>Biblography of projects can be exported easily in CSV format.</p>
                                            </div>
                                        </div>

                                    </div>
                                </IconContext.Provider>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
