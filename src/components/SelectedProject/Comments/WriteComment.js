import { useContext } from "react";
import { useState } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import Header from "../../main/Header";
import RichTextEditor from "./RichTextEditor";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {toast } from "react-toastify";
import "react-toastify/dist/inject-style";


export default function WriteComment() {
  const { user } = useContext(UserContext);
  let { projectId, replyTo } = useContext(ProjectContext);
  const [isDisabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chooseFile, setChooseFile] = useState({ file: "" });
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
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

  const [attachment, setAttachment] = useState({
    files: [],
    fileNames: [],
    uploadedBy: user?.userData?.name,
  });

  const addData = async () => {
    setDisabled(true);
    if (!replyTo?.commentId) {
    setIsLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:8080/comment",
          body
        );

        const info = await axios.post(
          "http://localhost:8080/commentFiles/saveToDb",
          {
            projectId: projectId,
            commentId: response?.data?.commentId,
            files: attachment?.files,
            fileNames: attachment?.fileNames,
            uploadedBy: attachment?.uploadedBy,
          }
        );
        setIsLoading(false);
        toast("you have added data successfully!");
        console.log(response);

        console.log(info);
      } catch (error) {
        setIsLoading(false);
      console.log("error: ", error.response);
      toast("We are unable to add your data");
      }
    } else if (replyTo?.commentId) {
      try {
        const response = await axios.post("http://localhost:8080/replie", body);
        console.log(response);

        const info = await axios.post(
          "http://localhost:8080/replyFiles/saveToDb",
          {
            projectId: projectId,
            replieId: response?.data?.replieId,
            files: attachment?.files,
            fileNames: attachment?.fileNames,
            uploadedBy: attachment?.uploadedBy,
          }
        );
        console.log(response);
        console.log(replyTo?.commentId);
        console.log(info);
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
        setFileName(e.target.files[0].name);
        setFile(reader.result);
      };
    }
  };


  const uploadFile = async (e) => {
    if (!replyTo?.commentId) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:8080/commentFiles",
          chooseFile
        );
        console.log(response?.data)
        attachment.files.push(response.data.data);
        attachment.fileNames.push(fileName)
        setIsLoading(false);
        toast.success("your file uploadation is successfull!");
      } catch (error) {
      setIsLoading(false);
      console.log("error: ", error.response);
      toast("your file uploadation is unsuccessfull");
      }
    } else if (replyTo?.commentId) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:8080/replyFiles",
          chooseFile
        );
        
        attachment.files.push(response.data.data);
        attachment.fileNames.push(fileName)
        setIsLoading(false);
        toast.success("your file uploadation is successfull!");
      } catch (error) {
        setIsLoading(false);
        console.log("error: ", error.response);
        toast.error("your file uploadation is unsuccessfull");
      }
    }
  };

  console.log(attachment?.fileNames)
  return (
    <>
      <Header />
      <div className="container-fluid bg-white" style={{ paddingTop: "4rem" }}>
        <div className="row ">
          <div className="col-8">
            <div className="d-flex justify-content-between  pb-2">
              <Link
                to={"/project"}
                className="btn btn-sm btn-secondary py-1 px-4 fw-bold"
              >
                Back
              </Link>
              {replyTo?.commentId}
              {replyTo?.commentId ? (
                <h5 className="text-center d-inline text-primary fw-bold">
                  Replying to {replyTo?.userName} for comment on{" "}
                  <Moment format="DD/MM/YYYY HH:mm">{replyTo?.time}</Moment>
                </h5>
              ) : (
                <h5 className="text-center d-inline text-primary fw-bold">
                  Writing Comment on Project - {projectId}
                </h5>
              )}
            </div>

            <RichTextEditor setBody={setBody} body={body} />

              <button
                type="button"
                disabled={isDisabled}
                className="btn bg-success rounded-pill text-white px-2 mt-3 float-end"
                onClick={addData}
              >
                <i className="bi bi-plus-circle me-1"></i>Add Comment
              </button>
          </div>

          <div className="col-4 pt-3 bg-light border-2" style={{marginTop:"5vh",height:"68vh"}}>
            <div className="d-flex justify-content-center pb-2">
              <input type="file" name="file" onChange={uploaadSingleFile} />

              <button
                type="button"
                disabled={isDisabled}
                className="btn theme-bg rounded-pill text-white px-2 "
                onClick={uploadFile}
              >
                Upload Fille
                {isLoading && (
                    <div className="spinner-border">
                      <span className="sr-only"></span>
                    </div>
                  )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
