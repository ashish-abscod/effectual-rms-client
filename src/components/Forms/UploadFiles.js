import { useContext, useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/inject-style";

export default function UploadFiles({
  formData,
  setFormData,
  attachment,
  setAttachment,
}) {
  const { projectId } = useContext(ProjectContext);
  const [isLoading, setIsLoading] = useState(false);
  const [chooseFile, setChooseFile] = useState({ file: "" });
  const [isDisabled, setDisabled] = useState(false);
  const [file, setFile] = useState([]);

  const uploadSingleFile = (e) => {
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
  };

  const uploadFile = async (e) => {
    setIsLoading(true);
    try {
      const info = await axios.post("http://localhost:8080/files", chooseFile);
      // console.log(info.data.data);
      attachment.files.push(info.data.data);
      setIsLoading(false);
      toast.success("you have successfully uploaded the file!");
      console.log(attachment);
    } catch (error) {
      setIsLoading(false);
      console.log("error: ", error.info);
      toast("your file uploadtion is unsuccessfull");
    }
  };

  return (
    <>
      {projectId ? (
        " "
      ) : (
        <div className="col-md-12">
          <label>
            Upload File:
            <input
              type="file"
              className="form-control"
              onChange={uploadSingleFile}
            />
          </label>
          <span className="ms-3">
            {/* {formData.file ? "File(s) Selected" : "File(s) Not Selected"} */}
          </span>

          <button
            type="button"
            disabled={isDisabled}
            className="btn theme-bg rounded-pill text-white px-2"
            onClick={uploadFile}
            style={{ marginLeft: "210px" }}
          >
            Upload File
            {isLoading && (
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            )}
          </button>
          <ToastContainer />
        </div>
      )}
      <div className="col-md-12 mt-3">
        <label className="w-100">
          Useful information for search
          <textarea
            type="text"
            className="form-control"
            style={{ minHeight: "22rem" }}
            id="info"
            placeholder="Type Something here..."
            value={formData?.UsefulInformationForSearch}
            onChange={(e) =>
              setFormData({
                ...formData,
                UsefulInformationForSearch: e.target.value,
              })
            }
          />
        </label>
      </div>
    </>
  );
}
