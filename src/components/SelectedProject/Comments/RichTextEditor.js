import { useRef } from 'react';
import JoditEditor from "jodit-react";

import React from 'react'
import { useMemo } from 'react';

export default function RichTextEditor({content, setContent }) {
    const editor = useRef(null);
    const config = useMemo(
        () => ({
            readonly: false,
            removeButtons: ["file", "image", "video", "print", "source","copyformat", "about"]
        }),
        []
    );

    return (
        <JoditEditor
            ref={editor}
            tabIndex={1} // tabIndex of textarea
            onChange={newContent => setContent({...content, comment : newContent})}
            onBlur={newContent => setContent({...content, comment : newContent})}
            config={config}
        />
    )
}