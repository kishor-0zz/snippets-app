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

export async function createSnippets(prevState, formData) {
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
    
        const snippet = await db.snippet.create({
            data: { title, code },
        });

        console.log(prevState);
        // Redirect upon successful creation
        redirect('/home');

    
}


