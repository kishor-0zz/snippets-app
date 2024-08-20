import { db } from '@/app/db';
import SnippteEditForm from '@/Component/snippet-edit-form';
import { notFound } from 'next/navigation';
import React from 'react';

const SnippteEditPage = async ({params}) => {
    const id  = parseInt(params.id);
    const snippet = await db.snippet.findFirst({
        where:{id:parseInt(id)}
    })
    if (!snippet) {
        return notFound();
    }

    return (
        <div className='container'>
            <SnippteEditForm snippet={snippet} />
        </div>
    );
};

export default SnippteEditPage;