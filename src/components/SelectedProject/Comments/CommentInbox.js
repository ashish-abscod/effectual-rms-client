import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import myPDF from '../../../Assets/React Componen LifeCycle.pdf'
import { ProjectContext } from '../../contexts/ProjectContext';
import { BsReplyAllFill } from 'react-icons/bs'
import { BiCommentDetail } from 'react-icons/bi'
import Moment from 'react-moment';
import { useRef } from 'react';
import DOMPurify from "dompurify";



export default function CommentInbox() {
    const navigate = useNavigate();
    const { projectId, setReplyTo } = useContext(ProjectContext);
    const [data, setData] = useState();
    const elementRef = useRef();


    const getDiscussions = async (req, res) => {
        try {
            const response = await axios.get(`http://localhost:8080/discussion/${projectId}`);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getDiscussions()
    }, [])



    return (
        <>
            <Link to={"/comment"} className="btn btn-sm btn-warning py-1 px-4 float-end me-3 fw-bold" onClick={()=> setReplyTo(null)}> <BiCommentDetail className="fs-5 fw-bold"/> Comment </Link>
            <section className='container commentInbox py-3 pt-0 h-100 overflow-auto'>


                {data?.map((item, i) =>
                    <div className='row parent-wrapper bg-light py-2 border-top border-bottom mb-3' key={i}>

                        <div className='parent-profile-info' style={{ fontSize: "14px", left: "4em" }}>
                            <span className='name text-primary fw-bold'>{item?.userName} </span> 
                            <span className='designation text-secondary fw-bold'>({item?.userRole})</span>
                            <span className='fw-normal'>: <Moment format='DD-MMM-YYYY hh:mm a' className='fw-bold'>{item?.time}</Moment> </span>
                            <button type="button" className='btn btn-outline-primary rounded-pill ps-1 pe-2 py-1 float-end' onClick={() => {setReplyTo({userName : item.userName, time : item.time, commentId : item.commentId}); navigate('/comment')}}><BsReplyAllFill className='fs-4 pb-1' /> Reply</button>
                        </div>

                        <div className='child-wrapper ps-md-2'>
                            <div className='comment'>
                                <div className='ms-md-3 mt-2'>
                                    <div className='text' ref={elementRef} dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(item?.comment)}}>
                                    </div>
                                    <div className='comment-footer row justify-content-between align-items-center mb-2'>
                                        <div className='files mt-3 col-lg-10'>
                                            <span className='fw-bold'>Attached Files: </span>
                                            <a href={myPDF} className="me-3"> My PDF</a>
                                            <a href={myPDF} className="me-3">My Document</a>
                                            <a href={myPDF} className="me-3">My Document</a>
                                            <a href={myPDF} className="me-3">My Document</a>
                                        </div>
                                        <div className='col-lg-2 ps-lg-5'>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='replies-container ps-4 ps-md-0'>
                                {item?.myReplies.map((item, i) =>
                                    <div className='row replie py-2 ps-3 ps-md-5' key={i}>
                                        <div className="light-grey border-top border-3 border-primary py-2" >
                                            <div className='replie-profile-info' style={{ fontSize: "14px", left: "4em" }}>
                                                <span className='name text-primary fw-bold'>{item?.userName} </span>
                                                <span className='designation text-secondary fw-bold'> ({item?.userRole}) </span>
                                                <span>: replied on <Moment format='DD-MMM-YYYY hh:mm a' className='fw-bold'>{item?.time}</Moment></span>
                                            </div>
                                            <div className='replie-content' style={{ maxWidth: "fit-content" }}>
                                                <div className='replie-txt mt-2' dangerouslySetInnerHTML={{__html:item?.replie}}>
                                                </div>
                                                <div className='files mt-3'>
                                                    <span className='fw-bold'>Attached Files: </span>
                                                    <a href={myPDF} className="me-3">My Document</a>
                                                    <a href={myPDF} className="me-3">My Document</a>
                                                    <a href={myPDF} className="me-3">My Document</a>
                                                    <a href={myPDF} className="me-3">My Document</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                
                {data?.length === 0 ? <h5 className='text-danger text-center mt-5'>No Comments and Replies</h5> : ""}
            </section>
        </>
    )
}
