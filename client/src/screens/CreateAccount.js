// React imports
import React from 'react'

// Component imports
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

export default function Home ()
{
    return (
        <>
            <Meta title='Home - Narcissus' />
            <Navbar />

            <div className='container py-3'>
                <h5>
                    Journal entries.
                </h5>
            </div>
        </>
    )
}
