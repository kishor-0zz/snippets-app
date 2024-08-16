import { db } from "@/app/db"
import Link from "next/link";
import { notFound } from "next/navigation"

export default async function snippets(props){
await new Promise((r)=>setTimeout(r,3000))

const snippet = await db.snippet.findFirst({
    where: {id:parseInt(props.params.id)}
})

if(!snippet){
    return notFound();
}

    return(
        <div className="container">
            <div className='d-flex justify-content-between align-items-center border p-2'>
                <h4>{snippet.title}</h4>
                <div className="d-flex">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2">Edit</Link>
                    <button className="p-2">delete</button>
                </div>
            </div>
            
            <br></br>
            <pre className="border bg-light p-5">
                <code>
                    {snippet.code}
                </code>
            </pre>
        </div>
    )
}


