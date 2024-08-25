"use client"
import { useFormState } from "react-dom";
import { db } from "@/app/db";
import { redirect } from "next/navigation";
import * as actions from '@/actions';


const CreateSnippetPage = () => {
    const [formState, action]=useFormState(actions.creatSnippets,{
        message:" ",
    })

    return (
        <div className='container py-5'>
            <form action={action}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" className="form-control" id="title" name="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">code</label>
                    <textarea type="text" className="form-control" id="code" name="code" />
                </div>
                {
                    formState.message ? formState.message: null
                }
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
   
};

export default CreateSnippetPage;