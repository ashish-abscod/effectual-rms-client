import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export default function WriteComment() {
    const [content, setContent] = useState('');
    console.log(content)
    return (
        <div style={{ padding: 30 }}>
            <h1>Write Comment</h1>
            <RichTextEditor setContent={setContent}/>
            <div>
                {content && content}
            </div>
        </div>
    )
}
