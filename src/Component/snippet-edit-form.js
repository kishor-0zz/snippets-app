"use client"


import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

export default function SnippteEditForm({snippet}){

    const [code, SetCode] = useState(snippet.code)
    
    const handelEditorChange =(value)=>{
        SetCode(value)
        
    }
    const editSnippetAction = actions.editSnippet.bind(null,snippet.id, code)
    
    

    return(
        <div>
            <Editor
                height="30vh"
                defaultLanguage="javascript"
                theme="vs-dark"
                defaultValue={code}
                options={{minimap:{enabled:false} }}
                onChange={handelEditorChange}
            />
            <form action={editSnippetAction} >
                <button type="submit" >save</button>
            </form>
        </div>
    )
}

