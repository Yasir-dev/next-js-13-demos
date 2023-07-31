"use client"
import React, { useEffect } from 'react'

const ClientComponent = () => {
    console.log(
        'Client page rendering: this should only be printed on the server during ssr, and client when routing'
    );

    useEffect(() => {
        console.log('Client component rendered');
    });

    return (
        <div>
            <h1>Client Page</h1>
        </div>
    );
}

export default ClientComponent