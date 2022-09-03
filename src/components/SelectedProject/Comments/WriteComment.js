import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header";
import RichTextEditor from "./RichTextEditor";

export default function WriteComment() {
    const [content, setContent] = useState('');
    console.log(content);
    let { id } = useParams();

    return (
        <>
            <Header />
            <div className="container bg-white p-3">
                <h5 className="text-center text-primary">Commenting on project - {id}</h5>
                <RichTextEditor setContent={setContent} />

                <footer className="d-flex justify-content-between mt-3">
                    <div>
                        <input type="file" name="files" multiple />
                    </div>
                    <button type="button" className="btn theme-bg rounded-pill text-white px-2"><i class="bi bi-plus-circle me-1"></i>Upload</button>
                </footer>
            </div>
        </>
    )
}
