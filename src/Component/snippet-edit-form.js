// "use client"

// import editSnippet from "@/action";
// import { Editor } from "@monaco-editor/react";
// import { useState } from "react";

// export default function SnippteEditForm({snippet}){

//     const [code, SetCode] = useState(snippet.code)

//     const handelEditorChange =(value)=>{
//         SetCode(value)
        
//     }

//     const editSnippetAction = editSnippet.bind(null,snippet.id ,code)
    
    

//     return(
//         <div>
//             <Editor
//                 height="30vh"
//                 defaultLanguage="javascript"
//                 theme="vs-dark"
//                 defaultValue={snippet.title}
//                 options={{minimap:{enabled:false} }}
//                 onChange={handelEditorChange}
//             />
//             <form action={editSnippetAction} >
//                 <button type="submit" >save</button>
//             </form>
//         </div>
//     )
// }



"use client"; // Ensure you're using this at the top

import editSnippet from "@/action"; // Assuming editSnippet is an async function
import { Editor } from "@monaco-editor/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function SnippteEditForm({ snippet }) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      await editSnippet(snippet.id, code); // Call the action
      // Optionally handle success here (e.g., show a success message)
    } catch (error) {
      console.error("Error editing snippet:", error); // Handle errors
    }
    console.log(code);
    
    
  };
  return (
    <div>
      <Editor
        height="30vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form onSubmit={handleSubmit}>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
