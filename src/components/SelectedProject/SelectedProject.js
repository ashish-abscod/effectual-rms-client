import { useState } from 'react'
import Header from '../main/Header'
import CommentInbox from './Comments/CommentInbox';
import CreateProject from '../Forms/CreateProject';
import FileManger from './FileManger';
import Feedback from './Feedback';
import Evaluation from './Evaluation';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { Link } from 'react-router-dom';


export default function SelectedProject() {
  const [projectSelected] = useState(true);
  const {projectId} = useContext(ProjectContext);

  return (
    <>
      <Header projectSelected={projectSelected} />
      
      <div className='container' style={{paddingTop:"4rem"}} >
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#comment" type="button" role="tab" aria-controls="comment" aria-selected="true">{projectId}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#projectDetails" type="button" role="tab" aria-controls="projectDetails" aria-selected="false">Project Details</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#fileManager" type="button" role="tab" aria-controls="fileManager" aria-selected="false">File Manager</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#evaluation" type="button" role="tab" aria-controls="evaluation" aria-selected="false">Evaluation</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#feedback" type="button" role="tab" aria-controls="feedback" aria-selected="false">Feedback</button>
          </li>
          <li className="nav-item ms-5" role="presentation">
          <Link to={"/comment"} className="btn btn-warning p-1"> <i className="bi bi-chat-dots me-1" /> Comment </Link>
          </li>
        </ul>
        <div className="tab-content bg-white" id="myTabContent">
          <div className="tab-pane show active" id="comment" role="tabpanel">
            <CommentInbox />
          </div>
          <div className="tab-pane" id="projectDetails" role="tabpanel">
            <CreateProject />
          </div>
          <div className="tab-pane" id="fileManager" role="tabpanel">
            <FileManger />
          </div>
          <div className="tab-pane" id="evaluation" role="tabpanel">
            <Evaluation />
          </div>
          <div className="tab-pane" id="feedback" role="tabpanel">
            <Feedback />
          </div>
        </div>
      </div>
    </>
  )
}
