import { useRef } from 'react';
import JoditEditor from "jodit-react";

import React from 'react'
import { useMemo } from 'react';

export default function RichTextEditor({ body, setBody }) {
    const editor = useRef(null);
    const config = useMemo(
        () => ({
            readonly: false,
            removeButtons: ["file", "image", "video", "print", "source", "copyformat", "about"],
            askBeforePasteHTML: false,
            askBeforePasteFromWord: false,
            defaultActionOnPaste: "insert_clear_html"
        }),
        []
    );

    return (
        <JoditEditor
            ref={editor}
            tabIndex={1} // tabIndex of textarea
            onChange={newContent => setBody({ ...body, content: newContent })}
            onBlur={newContent => setBody({ ...body, content: newContent })}
            config={config}
        />
    )
}