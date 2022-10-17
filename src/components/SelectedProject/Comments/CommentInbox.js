import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ProjectContext } from '../../contexts/ProjectContext';
import { BsReplyAllFill } from 'react-icons/bs'
import { BiCommentDetail } from 'react-icons/bi'
import Moment from 'react-moment';
import DOMPurify from "dompurify";



export default function CommentInbox() {
    const navigate = useNavigate();
    const { projectId, setReplyTo } = useContext(ProjectContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const getDiscussions = async (projectId) => {
        if (projectId) {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/discussion/${projectId}`);
                setData(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    }
    useEffect(() => {
        getDiscussions(projectId)
    }, [projectId])

    return (
        <>
            <h5 className='theme3-color fw-bold d-inline-block ms-3 mt-2'>Discussion Inbox</h5>
            <Link to={"/comment"} className="btn btn-sm btn-primary my-1 py-2 px-4 float-end me-3 fw-bold" onClick={() => setReplyTo(null)}> <BiCommentDetail className="fs-5 fw-bold" /> Add Comment </Link>
            <section className='container commentInbox overflow-auto' style={{height:"73vh"}}>


                {data?.map((items, i) =>
                    <div className='row parent-wrapper bg-light py-2 border-top border-bottom mb-3' key={i}>

                        <div className='parent-profile-info' style={{ fontSize: "14px", left: "4em" }}>
                            <span className='name text-primary fw-bold'>{items?.userName} </span>
                            <span className='designation text-secondary fw-bold'>({items?.userRole})</span>
                            <span className='fw-normal'>: <Moment format='DD-MMM-YYYY HH:mm a' className='fw-bold'>{items?.time}</Moment></span>
                            <button type="button" className='btn btn-outline-primary rounded-pill ps-1 pe-2 py-1 float-end' onClick={() => { setReplyTo({ userName: items.userName, time: items.time, commentId: items.commentId }); navigate('/comment') }}><BsReplyAllFill className='fs-4 pb-1' /> Reply</button>
                        </div>

                        <div className='child-wrapper ps-md-2'>
                            <div className='comment'>
                                <div className='ms-md-3 mt-2'>
                                    <div className='text' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(items?.comment) }}>
                                    </div>
                                    <div className='comment-footer row justify-content-between align-items-center mb-2'>
                                        <div className='files mt-3 col-lg-10'>
                                            {items?.attachments?.[0]?.files.length > 0 ? <span className='fw-bold'>Attached Files: </span> : ""}
                                            {
                                                items?.attachments?.[0]?.files?.map((item, i) =>
                                                    <a href={item} className="me-3" key={i}>Document {i + 1}</a>
                                                )
                                            }
                                        </div>
                                        <div className='col-lg-2 ps-lg-5'>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='replies-container ps-4 ps-md-0'>
                                {items?.replies.map((item, i) =>
                                    <div className='row replie py-2 ps-3 ps-md-5' key={i}>
                                        <div className="light-grey border-top border-3 border-primary py-2" >
                                            <div className='replie-profile-info' style={{ fontSize: "14px", left: "4em" }}>
                                                <span className='name text-primary fw-bold'>{item?.userName} </span>
                                                <span className='designation text-secondary fw-bold'> ({item?.userRole}) </span>
                                                <span>: replied on <Moment format='DD-MMM-YYYY hh:mm a' className='fw-bold'>{item?.time}</Moment></span>
                                            </div>
                                            <div className='replie-content' style={{ maxWidth: "fit-content" }}>
                                                <div className='replie-txt mt-2' dangerouslySetInnerHTML={{ __html: item?.replie }}>
                                                </div>
                                                <div className='files mt-3'>
                                                    {item?.attachments?.[0]?.files.length > 0 ?
                                                        <span className='fw-bold'>Attached Files: </span> : ""
                                                    }
                                                    {
                                                        item?.attachments?.[0]?.files?.map((url, i) =>
                                                            <a href={url} className="me-3" key={i}>Document {i + 1}</a>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {loading ? <div className='d-flex align-items-center justify-content-center p-5'>
                    <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="sr-only mt-5"></span>
                    </div>
                    <h5 className='color text-secondary ms-3'>Loading Comments...</h5>
                </div> : ""}
                {data?.length === 0 ? <h5 className='text-danger text-center mt-5'>No Comments and Replies</h5> : ""}
            </section>
        </>
    )
}
