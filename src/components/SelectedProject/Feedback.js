import React from "react";
import axios from "axios";
import { useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function Feedback() {
  const { projectId } = useContext(ProjectContext);
  const { user } = useContext(UserContext);
  const [addFeedback, setAddFeedback] = useState({
    feedback: "",
    projectId: projectId,
    userId: `${user.userData._id}`,
  });

  const submitData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/feedback/",
        addFeedback
      );

      console.log("addresponse: ", response);
      console.log(addFeedback);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <textarea
              rows="18"
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
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
