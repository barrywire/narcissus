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
                {user ? (<Write />) : (
                    <>
                        <h5>
                            Welcome to Narcissus.
                        </h5>
                        <p>
                            This is a journal application built with React and Firebase.
                        </p>
                        <p>
                            Sign in to get started.
                        </p>
                    </>
                )}

            </div>
        </>
    )
}
