import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

export default function UploadFiles({ formData, setFormData }) {
    const { projectId } = useContext(ProjectContext);

    return (
        <>
            {projectId ? " " :
                <div className="col-md-12">

                    <label>Upload File:
                        <input type="file" multiple className="form-control" onChange={(e) => setFormData({ ...formData, ChooseFile: e.target.files })} />
                    </label>
                    <span className="ms-3">{formData.ChooseFile[0]?.name ? "File's Selected ! " : "File's not selected! "}</span>
                </div>
            }
            <div className="col-md-12 mt-3">
                <label className='w-100'>Useful information for search
                    <textarea type="text" className="form-control" style={{ minHeight: "22rem" }} id="info" placeholder='Type Something here...' value={formData.UsefulInformationForSearch} onChange={(e) => setFormData({ ...formData, UsefulInformationForSearch: e.target.value })} />
                </label>
            </div>
        </>
    )
}
