import { useContext } from "react";
import { useState } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import Header from "../../main/Header";
import RichTextEditor from "./RichTextEditor";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/inject-style";
import { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';

export default function WriteComment() {
  const { user } = useContext(UserContext);
  let { projectId, replyTo, setProjectId } = useContext(ProjectContext);
  const [isDisabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resource, setChooseFile] = useState({ file: "" });
  const [selectedFile, setSelectedFile] = useState('');
  const [fileNames, setFileNames] = useState([]);
  if(!projectId) setProjectId(window?.localStorage?.getItem('projectId'));

  const navigate = useNavigate();

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

  const [attachment] = useState({
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
          `${process.env.REACT_APP_API_URL}/comment`,
          body
          );

        await axios.post(
          `${process.env.REACT_APP_API_URL}/commentFiles/saveToDb`,
          {
            projectId: projectId,
            commentId: response?.data?.commentId,
            files: attachment?.files,
            filesName: attachment?.fileNames,
            uploadedBy: attachment?.uploadedBy,
          }
        );
        setIsLoading(false);
        if(response?.data?.status === "success"){
          toast.success(response?.data?.msg);
          navigate("/project");
        }
      } catch (error) {
        setIsLoading(false);
        toast.error("Something went wrong.");
      }
    } else if (replyTo?.commentId) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/replie`, body);

        await axios.post(
          `${process.env.REACT_APP_API_URL}/replyFiles/saveToDb`,
          {
            projectId: projectId,
            replieId: response?.data?.replieId,
            files: attachment?.files,
            filesName: attachment?.fileNames,
            uploadedBy: attachment?.uploadedBy,
          }
        );
        if(response?.data?.status === "success"){
          toast.success(response?.data?.msg);
          navigate("/project");
        }
      } catch (error) {
        toast.error("Something went wrong.");
      }
    }
  };

  const uploadSingleFile = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setChooseFile({ ...resource, file: reader.result });
      };
    }
  };

  
  
  const uploadFile = async (e) => {
    if (!replyTo?.commentId) {
      setIsLoading(true);
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_API_URL}/commentFiles`,
          resource
          );
          attachment.files.push(result?.data?.url);
        if (result?.data?.status === "success") {
          toast.success(result?.data?.msg);
          setFileNames([...fileNames, selectedFile]);
        }
        else {
          toast.error(result?.data?.msg);
        }
      } catch (error) {
        toast.error("Something went wrong.")
        console.log(error);
      } finally {
        setIsLoading(false);
        setChooseFile({ ...resource, file: "" })
      }
    } else if (replyTo?.commentId) {
      setIsLoading(true);
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_API_URL}/replyFiles`,
          resource
          );
          attachment.files.push(result?.data?.url);
          if (result?.data?.status === "success") {
            toast.success(result?.data?.msg);
            setFileNames([...fileNames, selectedFile]);
          }
          else {
            toast.error(result?.data?.msg);
          }
        } catch (error) {
          toast.error("Something went wrong.")
        console.log(error);
      } finally {
        setIsLoading(false);
        setChooseFile({ ...resource, file: "" })
      }
    }
  };
  
  useEffect(() => {
    if (resource?.file !== "") {
      uploadFile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource]
  )
  
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

          <div className="col-4 pt-3 bg-light border-2" style={{ marginTop: "5vh", height: "68vh" }}>
            <div className="d-flex justify-content-center pb-2">
              <label className="text-primary fw-bold d-flex align-items-center">
                Upload File:
                {isLoading && (
                  <>
                    <div className="spinner-border text-secondary ms-3 me-2" role="status">
                      <span className="sr-only"></span>
                    </div>
                    <span className="text-secondary">Uploading...</span>
                  </>
                )}
              </label>
              <input
                type="file"
                className="form-control mt-2"
                onChange={(e) => uploadSingleFile(e)}
              />

            </div>
            <div className="mt-3 overflow-auto" style={{ maxHeight: "50vh" }}>
              {
                fileNames?.map((fileName, i) =>
                  <li key={i} className="text-success list-unstyled d-flex text-truncate" 
                  style={{ maxWidth: "20rem" }}><BsCheckCircleFill color="green" /> <span className="">{fileName}</span></li>
                )
              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
