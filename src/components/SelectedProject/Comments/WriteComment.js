import { useContext } from "react";
import { useState } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import Header from "../../main/Header";
import RichTextEditor from "./RichTextEditor";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function WriteComment() {
  const { user } = useContext(UserContext);
  let { projectId, replyTo } = useContext(ProjectContext);
  const [isDisabled, setDisabled] = useState(false);

  const [chooseFile, setChooseFile] = useState({ file: "" });

  const [file, setFile] = useState();

  const getFormatedToday = () => {
    var date = new Date();
    var str =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    return str;
  };

  const [body, setBody] = useState({
    projectId: projectId,
    commentId: replyTo?.commentId,
    content: "",
    time: `${getFormatedToday()}`,
    userName: user?.userData?.name,
    userRole: user?.userData?.role,
  });

  const addData = async () => {
    setDisabled(true);
    if (!replyTo?.commentId) {
      try {
        const response = await axios.post(
          "http://localhost:8080/comment",
          body
        );
        console.log(response);
      } catch (error) {
        console.log("error: ", error);
      }
    } else if (replyTo?.commentId) {
      try {
        const response = await axios.post("http://localhost:8080/replie", body);
        console.log(response);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const uploaadSingleFile = async (e) => {
    
    if (e.target.files[0]) {
      //   console.log("e.target.files[0]: ", e.target.files[0]);
      const reader = new FileReader();
      setFile(URL.createObjectURL(e.target.files[0]));
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        // console.log("reader.result: ", reader.result);
        setChooseFile({ ...chooseFile, file: reader.result });
        setFile(reader.result);
      };
    }

    if (!replyTo?.commentId) {
      try {
        const response = await axios.post(
          "http://localhost:8080/commentFiles",
          chooseFile
        );
        console.log(response);
      } catch (error) {
        console.log("error: ", error);
      }
    } else if (replyTo?.commentId) {
      try {
        const response = await axios.post(
          "http://localhost:8080/replyFiles",
          chooseFile
        );
        console.log(response);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container bg-white" style={{ paddingTop: "4rem" }}>
        <div className="d-flex justify-content-around pb-2">
          <Link
            to={"/project"}
            className="btn btn-sm btn-secondary py-1 px-4 fw-bold"
          >
            Back
          </Link>
          {replyTo?.userName ? (
            <h6 className="text-center d-inline text-primary fw-bold">
              Replying to {replyTo?.userName} for comment on{" "}
              <Moment format="DD/MM/YYYY HH:mm">{replyTo?.time}</Moment>
            </h6>
          ) : (
            <h6 className="text-center d-inline text-primary fw-bold">
              Writing Comment on Project - {projectId}
            </h6>
          )}
        </div>

        <RichTextEditor setBody={setBody} body={body} />

        <footer className="d-flex justify-content-between mt-3">
          <div>
            <input
              type="file"
              name="file"
              onChange={uploaadSingleFile}
            />
          </div>
          <button
            type="button"
            disabled={isDisabled}
            className="btn theme-bg rounded-pill text-white px-2"
            onClick={addData}
          >
            <i className="bi bi-plus-circle me-1"></i>Upload
          </button>
        </footer>
      </div>
    </>
  );
}
