import React from 'react';
import { db } from '../db';

const home = async() => {
    const snippets = await db.snippet.findMany();

    return (
        <div>
            {snippets.length}
            home
            <br></br>
            {snippets.map(snippet=><div key={snippet.id} snippet={snippet}>
                <h2>{snippet.title}</h2>
                <div>{snippet.code}</div>
            </div>)}
        </div>
    );
};

export default home;