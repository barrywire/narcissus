// React imports
import React from 'react'

// Component imports
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Write from '../components/Write'

// Utility imports
import { UserAuth } from '../context/AuthContext'

export default function Home()
{
    const { user } = UserAuth()
    return (
        <>
            <Meta title='Home - Narcissus' />
            <Navbar />

            <div className='container py-3'>
                <h5>
                    Journal entries by {user && user.email}.
                </h5>

                <hr className='my-lg-5 my-md-3' />

                <Write />
            </div>
        </>
    )
}
