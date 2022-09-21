import { useContext } from "react";
import { useState } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import Header from "../../main/Header";
import RichTextEditor from "./RichTextEditor";
import axios from "axios"
import { UserContext } from "../../contexts/UserContext";

export default function WriteComment() {
    const { user, setUser } = useContext(UserContext);
    const [content, setContent] = useState({
        
        comment:"",
        time:  Date.now(),
        userName:user.userData.name,
        userRole:user.userData.role
    });
    console.log(content);

    let { projectId } = useContext(ProjectContext);

    const uploadData = async () => {
        try {
          const response = await axios.post("http://localhost:8080/comment", content);
    
          console.log("addresponse: ", response);
        } catch (error) {
          console.log("error: ", error);
        }
      };


    return (
        <>
            <Header />
            <div className="container bg-white" style={{paddingTop:"4rem"}}>
                <h5 className="text-center text-primary">Commenting on project - {projectId}</h5>
                <RichTextEditor setContent={setContent} />

                <footer className="d-flex justify-content-between mt-3">
                    <div>
                        <input type="file" name="files" multiple />
                    </div>
                    <button type="button" className="btn theme-bg rounded-pill text-white px-2" onClick={uploadData}><i className="bi bi-plus-circle me-1"></i>Upload</button>
                </footer>
            </div>
        </>
    )
}
