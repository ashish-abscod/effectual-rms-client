import { useContext, useState } from "react";
import axios from "axios";
// import loader from "loader"
import { ProjectContext } from "../contexts/ProjectContext";

export default function UploadFiles({ formData, setFormData }) {
  const { projectId } = useContext(ProjectContext);

  const [chooseFile, setChooseFile] = useState({ file: "" });

  const [file, setFile] = useState();

  const uploadSingleFile = async (e) => {
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
              // disabled={loader}
              // disabled={file || loader}
              onChange={uploadSingleFile}
            />
          </label>
          <span className="ms-3">
            {chooseFile.file ? "File(s) Selected" : "File(s) Not Selected"}
          </span>
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
