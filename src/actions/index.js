'use server';
import { redirect } from "next/navigation"
import { db } from "@/app/db"


export async function editSnippet(id, code){
  await db.snippet.update({
    where:{id},
    data:{code}
  })
  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id) {
  await db.snippet.delete({
    where:{id}
  })
}