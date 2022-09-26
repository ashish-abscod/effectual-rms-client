import { useContext } from "react";
import { useState } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import Header from "../../main/Header";
import RichTextEditor from "./RichTextEditor";
import axios from "axios"
import { UserContext } from "../../contexts/UserContext";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function WriteComment() {
    const { user } = useContext(UserContext);
    let { projectId, replyTo } = useContext(ProjectContext);
    const [isDisabled, setDisabled] = useState(false);

    let currentDateTime = new Date().toLocaleString();
    const [body, setBody] = useState({
        content: "",
        time: `${currentDateTime}`,
        userName: user?.userData?.name,
        userRole: user?.userData?.role
    });

    const uploadData = async () => {
        setDisabled(true);
        if (!replyTo?.userName) {
            try {
                const response = await axios.post("http://localhost:8080/comment", body);
                console.log(response);
            } catch (error) {
                console.log("error: ", error);
            }
        } else if (replyTo?.userName) {
            try {
                const response = await axios.post("http://localhost:8080/replie", body);
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
                    <Link to={"/project"} className="btn btn-sm btn-secondary py-1 px-4 fw-bold">Back</Link>
                    {replyTo?.userName ?
                        <h6 className="text-center d-inline text-primary fw-bold">Replying to {replyTo?.userName} for comment on <Moment format="DD/MM/YYYY HH:mm">{replyTo?.time}</Moment></h6>
                        :
                        <h6 className="text-center d-inline text-primary fw-bold">Writing Comment on Project - {projectId}</h6>
                    }
                </div>


                <RichTextEditor setBody={setBody} body={body} />

                <footer className="d-flex justify-content-between mt-3">
                    <div>
                        <input type="file" name="files" multiple />
                    </div>
                    <button type="button" disabled={isDisabled} className="btn theme-bg rounded-pill text-white px-2" onClick={uploadData}><i className="bi bi-plus-circle me-1"></i>Upload</button>
                </footer>
            </div>
        </>
    )
}
