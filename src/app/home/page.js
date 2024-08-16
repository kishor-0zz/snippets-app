import React from 'react';
import { db } from '../db';
import Link from 'next/link';

const home = async() => {
    const snippets = await db.snippet.findMany();
    console.log(snippets);
    

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
                </div>
            </Link>)}
        </div>
    );
};

export default home;