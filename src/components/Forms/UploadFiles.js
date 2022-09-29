import { useContext, useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import axios from "axios";

export default function UploadFiles({ formData, setFormData }) {
  const { projectId } = useContext(ProjectContext);
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
    try {
      const info = await axios.post("http://localhost:8080/files", chooseFile);
      console.log(info);
    } catch (error) {
      console.log(error);
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
              // multiple
              onChange={uploadSingleFile}
            />
          </label>
          <span className="ms-3">
            {formData.file ? "File(s) Selected" : "File(s) Not Selected"}
          </span>
          
            <button
              type="button"
              disabled={isDisabled}
              className="btn theme-bg rounded-pill text-white px-2"
              onClick={uploadFile}
              style={{marginLeft:"210px"}}
            >
              <i className="bi bi-plus-circle me-1"></i>Upload Fille
            </button>
          
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
            value={formData.UsefulInformationForSearch}
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
