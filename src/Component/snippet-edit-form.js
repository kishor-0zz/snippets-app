"use client"

import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export default function SnippteEditForm({snippet}){

    const [code, SetCode] = useState(snippet.code)

    const handelEditorChange =(value)=>{
        SetCode(value)
        
    }
    return(
        <div>
            <Editor
                height="30vh"
                defaultLanguage="javascript"
                theme="vs-dark"
                defaultValue={snippet.title}
                options={{minimap:{enabled:false} }}
                onChange={handelEditorChange}
            
            />
        </div>
    )
}