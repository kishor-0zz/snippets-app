// 'use server';
// import { redirect } from "next/navigation"
// import { db } from "@/app/db"


// export async function editSnippet(id, code){
//   await db.snippet.update({
//     where:{id},
//     data:{code}
//   })
//   redirect(`/snippets/${id}`)
// }

// export async function deleteSnippet(id) {
//   await db.snippet.delete({
//     where:{id}
//   })
//   redirect('/home')
// }




// export async function creatSnippets(formData, formState){
//   // "use server";

//       const title = formData.get("title");
//       const code = formData.get("code");

//       if(typeof title === "string" || title.length<=3){
//           return{
//             message: 'Title must be longer',
//           }
//       }
//       if(typeof title !== "string" || code.length<=10){
//         return{
//           message:"title must be longer"
//         }
//       }

//     const snippet = await db.snippet.create({
//       data:{
//           title,
//           code,
//           },
//       });
//       console.log(snippet);
//       // redirect('/home')
//   }

"use server";
import { redirect } from "next/navigation";
import { db } from "@/app/db";

export async function editSnippet(id, code) {
    await db.snippet.update({
        where: { id },
        data: { code }
    });
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id) {
    await db.snippet.delete({
        where: { id }
    });
    redirect('/home');
}

export async function createSnippets(formData, formState) {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length <= 3) {
        return {
            message: 'Title must be longer than 3 characters',
        };
    }

    if (typeof code !== "string" || code.length <= 10) {
        return {
            message: 'Code must be longer than 10 characters',
        };
    }

    const snippet = await db.snippet.create({
        data: {
            title,
            code,
        },
    });
    
    console.log(snippet);
    redirect('/home');
}
