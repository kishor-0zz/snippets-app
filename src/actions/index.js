"use server";
import { redirect } from "next/navigation";
import { db } from "@/app/db";
import { revalidatePath } from "next/cache";

export async function editSnippet(id, code) {
    await db.snippet.update({
        where: { id },
        data: { code }
    });
    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id) {
    await db.snippet.delete({
        where: { id }
    });

    revalidatePath('/home')
    redirect('/home');
}

export async function createSnippets(prevState, formData) {
 
    const title = formData.get("title");
    const code = formData.get("code");


    try{
        if (typeof title !== "string" || title.length <= 3) {
            return { message: 'Title must be longer than 3 characters' };
        }

        if (typeof code !== "string" || code.length <= 10) {
            return { message: 'Code must be longer than 10 characters' };
        }
        await db.snippet.create({
            data: { 
                title, 
                code 
            },
        });

    }catch{
        if(error){
            return error.message;
        } else{
            return{
                message:"this is wrong"
            }
        }
    }
    revalidatePath('/home')
    redirect('/home');
}


