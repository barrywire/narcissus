// React imports
import React from 'react'

// Component imports
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

// Utility imports
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'

// Firebase functions 
import { doc, getDoc } from 'firebase/firestore'

export default function Account()
{
    const { user } = UserAuth()
    return (
        <>
            <Meta title='Account - Narcissus' />
            <Navbar active='account' />

            <div className='container py-3'>
                <h5>
                    Journal entries by {user && user.email}.
                </h5>

                {/* fetch the journal entries by the user with the email from firestore */}
                {/* <div className='row gy-2 gx-3 align-items-center'>
                    {user && getDoc(doc(db, `entries`))
                        .then(doc =>
                        {
                            if (doc.exists)
                            {
                                return doc.data().entries.map((entry, index) =>
                                {
                                    return (
                                        <div key={index} className='col-12 col-md-6 col-lg-4'>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <p>{entry}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            } else
                            {
                                return (
                                    <div className='col-12'>
                                        <p>No entries found.</p>
                                    </div>
                                )
                            }
                        })
                        .catch(error =>
                        {
                            console.log(error.message)
                        })}
                </div> */}
            </div>
        </>
    )
}
