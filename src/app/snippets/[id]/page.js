import { db } from "@/app/db"
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
        <div>
            {snippet.title}
        </div>
    )
}


