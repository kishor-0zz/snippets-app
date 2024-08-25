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





// export async function createSnippets(formData) {
//     // Assuming formData is a plain object
//     const { title, code } = formData;

//     // Validate title
//     if (typeof title !== "string" || title.length < 3) {
//         return { message: 'Title must be longer than 3 characters' };
//     }

//     // Validate code
//     if (typeof code !== "string" || code.length <= 10) {
//         return { message: 'Code must be longer than 10 characters' };
//     }

//     // Try to create the snippet in the database
//     try {
//         const snippet = await db.snippet.create({
//             data: { title, code },
//         });

//         console.log(snippet);

//         // Redirect upon successful creation
//         redirect('/home');
//     } catch (error) {
//         console.error("Error creating snippet:", error);
//         return { message: 'An error occurred while creating the snippet.' };
//     }
// }



export async function createSnippets(formData) {
    // Extract the form data
    const title = formData.get("title");
    const code = formData.get("code");

    // Validate title
    if (typeof title !== "string" || title.length <= 3) {
        return { message: 'Title must be longer than 3 characters' };
    }

    // Validate code
    if (typeof code !== "string" || code.length <= 10) {
        return { message: 'Code must be longer than 10 characters' };
    }

    // Try to create the snippet in the database
    try {
        const snippet = await db.snippet.create({
            data: { title, code },
        });

        console.log(snippet);

        // Redirect upon successful creation
        redirect('/home');
    } catch (error) {
        console.error("Error creating snippet:", error);
        return { message: 'An error occurred while creating the snippet.' };
    }
}


