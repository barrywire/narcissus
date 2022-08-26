// React imports
import React from 'react'

// Component imports
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

const Home = () =>
{
    return (
        <>
            <Meta title='Home - Narcissus' />
            <Navbar />

            <div className='container py-3'>
                <h5>
                    Home
                </h5>
            </div>
        </>
    )
}

export default Home