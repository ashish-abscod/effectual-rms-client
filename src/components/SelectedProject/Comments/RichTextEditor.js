import { useRef } from 'react';
import JoditEditor from "jodit-react";

import React from 'react'

export default function RichTextEditor({ setContent }) {
    const editor = useRef(null)

    // const config = {
    //     buttons: ["bold", "italic"]
    // }
    return (
        <JoditEditor
            ref={editor}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        />
    )
}



// export default RichTextEditor = ({ placeholder }) => {
    // const editor = useRef(null)
    // const [content, setContent] = useState('')

    // const config = useMemo({
    //     readonly: false,     // all options from https://xdsoft.net/jodit/doc/
    //     placeholder: placeholder || 'Start typings...'
    // }, [placeholder])

//     return (
        // <JoditEditor
        //     ref={editor}
        //     value={content}
        //     config={config}
        //     tabIndex={1} // tabIndex of textarea
        //     onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        //     onChange={newContent => { }}
        // />
//     );
// }