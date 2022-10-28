import React from "react";
import axios from "axios";
import { useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Feedback() {
  const { projectId,setProjectId } = useContext(ProjectContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!projectId) setProjectId(window?.localStorage?.getItem('projectId'));
  }, [projectId,setProjectId])

  const [addFeedback, setAddFeedback] = useState({
    feedback: "",
    projectId: projectId,
    userId: `${user.userData._id}`,
  });

  const submitData = async () => {
    if(addFeedback?.feedback !== ""){
    try {

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/feedback/`,
        addFeedback
      );
      if(res?.data?.status === "success"){
        toast.success(res?.data?.msg);
      }else{
        toast.error(res?.data?.msg);
      }

    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  }else{
    toast.warn("Please write some feedback!");
  }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <textarea
              rows="15"
              className="w-100 border border-primary rounded p-3"
              placeholder="Please provide your valuable feedback..."
              value={addFeedback.name}
              onChange={(e) =>
                setAddFeedback({ ...addFeedback, feedback: e.target.value })
              }
            ></textarea>
          </div>
          <div className="col-12 mt-3">
            <button
              type="submit"
              className="btn btn-lg float-end btn-outline-success rounded-pill"
              onClick={()=>submitData()}
            >
              Send Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
