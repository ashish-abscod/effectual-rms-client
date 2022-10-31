import { useContext } from "react";
import { useState } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import Header from "../../main/Header";
import RichTextEditor from "./RichTextEditor";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";
import {FaPaperPlane} from "react-icons/fa";

export default function WriteComment() {
  const { user } = useContext(UserContext);
  let { projectId, replyTo, setProjectId } = useContext(ProjectContext);
  const [isDisabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resource, setResource] = useState({ file: "", filename: "" });
  const [selectedFile, setSelectedFile] = useState('');
  const [fileNames, setFileNames] = useState([]);
  if (!projectId) setProjectId(window?.localStorage?.getItem('projectId'));

  const navigate = useNavigate();

  const [body, setBody] = useState({
    projectId: projectId,
    commentId: replyTo?.commentId,
    content: "",
    time: "",
    userName: user?.userData?.name,
    userRole: user?.userData?.role,
  });

  const [attachment, setAttachment] = useState({
    files: [],
    uploadedBy: user?.userData?.name,
    role: user?.userData?.role
  });

  const addData = async () => {
    setDisabled(true);
    if (!replyTo?.commentId) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/comment`,
          body
        );

        await axios.post(
          `${process.env.REACT_APP_API_URL}/commentFiles/saveToDb`,
          {
            projectId: projectId,
            commentId: response?.data?.commentId,
            role: attachment?.role,
            files: attachment?.files,
            filesName: attachment?.fileNames,
            uploadedBy: attachment?.uploadedBy,
          }
        );
        if (response?.data?.status === "success") {
          toast.success(response?.data?.msg);
          navigate("/project");
        }
      } catch (error) {
        toast.error("Something went wrong.");
      }
      finally {
        setIsLoading(false);
      }
    } else if (replyTo?.commentId) {
      try {
        setIsLoading(true);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/replie`, body);

        await axios.post(
          `${process.env.REACT_APP_API_URL}/replyFiles/saveToDb`,
          {
            projectId: projectId,
            replieId: response?.data?.replieId,
            files: attachment?.files,
            role: attachment?.role,
            filesName: attachment?.fileNames,
            uploadedBy: attachment?.uploadedBy,
          }
        );

        if (response?.data?.status === "success") {
          toast.success(response?.data?.msg);
          navigate("/project");
        }
      } catch (error) {
        toast.error("Something went wrong.");
      }
      finally {
        setIsLoading(false);
      }
    }
  };

  const uploadSingleFile = (e) => {
    if (e.target.files[0]) {
      const filename = e.target.files[0].name
      setSelectedFile(filename);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setResource({ ...resource, file: reader.result, filename: filename });
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
        setResource({ ...resource, file: "" })
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
        setResource({ ...resource, file: "" })
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

  const handleRemoveFile = (id) => {
    const filteredFileNames = fileNames?.filter((fileName, i) => {
      if (i !== id) return fileName;
      else return "";
    })
    const filteredFiles = attachment?.files?.filter((url, i) => {
      if (i !== id) return url;
      else return "";

    })
    setFileNames(filteredFileNames);
    setAttachment({ ...attachment, files: filteredFiles });
  }

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
              <FaPaperPlane/> {!replyTo?.commentId ? "Add Comment" : "Add Reply"}
            </button>
          </div>

          <div className="col-4 bg-light border-2 d-flex flex-column" style={{ marginTop: "6vh", height: "70vh" }}>
            <div className="d-flex flex-column justify-content-center pb-2">
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
            <div className="mt-3 overflow-auto mh-100">
              {
                fileNames?.map((fileName, i) =>
                  <div className="d-flex text-align-center" key={`${fileName+i}`}>
                    <li key={i} className="text-success list-unstyled d-inline-block text-truncate" style={{ maxWidth: "18rem" }}><BsCheckCircleFill color="green" /> <span className="ms-1">{fileName}</span></li>
                    <button type="button" className="btn btn-danger ms-2 btn-sm lh-1" onClick={() => handleRemoveFile(i)}><AiOutlineDelete/></button>
                  </div>
                )
              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
