"use client";
import { useFormState } from "react-dom";
import * as actions from '@/actions';

const CreateSnippetPage = () => {
    const [formState, action] = useFormState(actions.createSnippets, {
        message: " ",
    });

    return (
        <div className='container py-5'>
            <form action={action}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">Code</label>
                    <textarea className="form-control" id="code" name="code"></textarea>
                </div>
                {
                    formState.message && <div className="alert alert-warning">{formState.message}</div>
                }
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CreateSnippetPage;
