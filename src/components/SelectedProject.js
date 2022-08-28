import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import CommentInbox from './Comments/CommentInbox';

export default function SelectedProject() {

  let { id } = useParams();

  return (
    <>
      <Header />

      <div className='container'>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id='home-tab' data-bs-toggle="tab" data-bs-target="#comment" type="button" role="tab" aria-controls="home" aria-selected="true">Project-{id}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="doc-tab" data-bs-toggle="tab" data-bs-target="#doc" type="button" role="tab" aria-controls="doc" aria-selected="false">Doc</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">File Manager</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">File Mail Content</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Evaluation</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Feedback</button>
          </li>
        </ul>
        <div className="tab-content bg-white" id="myTabContent">
          <div className="tab-pane fade show active" id="comment" role="tabpanel" aria-labelledby="home-tab">
            <CommentInbox />
          </div>
          <div className="tab-pane fade" id="doc" role="tabpanel" aria-labelledby="doc-tab">
            <h3>Doc Viewer</h3>
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            In officia incididunt ut esse dolor Lorem tempor laborum. Cillum ad enim exercitation officia sunt adipisicing amet adipisicing cupidatat fugiat eu mollit aute velit. In est cupidatat exercitation sunt.
          </div>
        </div>
      </div>
    </>
  )
}
