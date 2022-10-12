import React from "react";
import axios from "axios";
import { useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function Feedback() {
  const { projectId,setProjectId } = useContext(ProjectContext);
  const { user } = useContext(UserContext);
  if (!projectId) {
    setProjectId(window?.localStorage?.getItem('projectId'))
  }
  const [addFeedback, setAddFeedback] = useState({
    feedback: "",
    projectId: projectId,
    userId: `${user.userData._id}`,
  });

  const submitData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/feedback/",
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
          <div className="col-12 text-center mt-3">
            <button
              type="submit"
              className="btn btn-lg btn-outline-success rounded-pill"
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
