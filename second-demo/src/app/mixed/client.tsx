'use client';

import { useEffect } from 'react';

export default function Client({
    message,
    children,
}: {
    message: string;
    children: React.ReactNode;
}) {
    console.log('Client component rendering');

    return (
        <div>
            <h2>Client Child</h2>
            <p>Message from parent: {message}</p>
            <div>{children}</div>
        </div>
    );
}