// "use client"
import { db } from "@/app/db";
import { redirect } from "next/navigation";


const CreateSnippetPage = () => {
    async function creatSnippets(fromData){
    "use server";

    const title = fromData.get("title");
    const code = fromData.get("code");

    const snippet = await db.snippet.create({
        data:{
            title,
            code,
            },
        });
        console.log(snippet);
        // redirect('/home')
    }

    return (
        <div className='container py-5'>
            <form action={creatSnippets}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" className="form-control" id="title" name="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">code</label>
                    <textarea type="text" className="form-control" id="code" name="code" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
   
};

export default CreateSnippetPage;