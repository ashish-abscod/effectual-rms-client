import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/inject-style";
import { useEffect } from "react";
import {BsCheckCircleFill} from "react-icons/bs";


export default function UploadFiles({ formData, setFormData, attachment,fileNames,setFileNames }) {
  const [isLoading, setIsLoading] = useState(false);
  const [resource, setChooseFile] = useState({ file: "", filename:"" });
  const [selectedFile, setSelectedFile] = useState('');

  const uploadSingleFile = (e) => {
    if (e.target.files[0]) {
      const filename = e.target.files[0].name
      setSelectedFile(filename);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setChooseFile({ ...resource, file: reader.result, filename: filename});
      };
    }
  };

  const uploadFile = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/files`, resource);
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
      <div className="continar">
        <div className="row">
          <div className="col-md-6 col-lg-4 bg-light pt-2">
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

            <div className="mt-3 overflow-auto" style={{maxHeight:"50vh"}}>
              {
                fileNames?.map((fileName, i) =>
                  <li key={i} className="text-success list-unstyled d-flex text-truncate" style={{maxWidth:"20rem"}}><BsCheckCircleFill color="green"/> <span className="">{fileName}</span></li>
                )
              }
            </div>

          </div>
          <div className="col-md-6 col-lg-8">
            <label className="w-100 pt-2 text-primary fw-bold fs-5">
              Useful information for search
              <textarea
                type="text"
                className="form-control mt-1"
                style={{ minHeight: "60vh" }}
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
        </div>
      </div>
    </>
  );
}