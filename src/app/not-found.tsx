import React from 'react'

export default function notFound() {
    return (
        <div className='h-screen  flex flex-col items-center justify-center '>
            <h1 className='text-4xl'>404</h1>
            <p>
                the page is not exist on the server pls look another
            </p>
        </div>
    )
}
