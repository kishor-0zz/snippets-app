import React from 'react';
import { db } from '../db';
import Link from 'next/link';
import { deleteSnippet } from '@/actions';


const home = async() => {
    const snippets = await db.snippet.findMany();
    console.log(snippets);
    
    const deleteHandel = async (e)=>{
        e.preventDefault();
        await deleteSnippet(snippet.id)

    }
    return (
        <div className='container'>
            
            <div className='d-flex justify-content-between align-items-center border p-2'>
                <h4>shippets</h4>
                <Link href={`/snippets/new`} >create</Link>
            </div>
            <br></br>
            {snippets.map(snippet=>
            <Link 
            key={snippet.id} 
            snippet={snippet}
            href={`snippets/${snippet.id}`}
            className='w-100'
            >
                <div className='d-flex justify-content-between align-items-center border p-2'>
                    <h2 className='mb-0'>{snippet.title}</h2>
                    <p className='mb-0'>vew</p>
                    <button type='text' id='delete' onSubmit={deleteHandel}></button>
                </div>
            </Link>)}
        </div>
    );
};

export default home;