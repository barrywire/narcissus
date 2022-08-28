// React imports
import React, { useState } from 'react'

// Utility imports
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'

// Firebase functions
import { addDoc, collection } from 'firebase/firestore'

export default function Write()
{
    const { user } = UserAuth()

    const [entry, setEntry] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        setError('')

        try
        {
            const docRef = await addDoc(collection(db, 'entries'), {
                email: user.email,
                entry: entry,
                timestamp: Date.now()
            })

            // TODO: Refine the form clearance after submit
            setEntry('')
            setMessage('Yaaay! Entry saved.')
        }
        catch (error)
        {
            console.log(error.message)
        }

    }

    return (
        <>
            <div className='container py-3'>
                <h5>
                    Shall we write?
                </h5>

                {/* form with a single text field that accepts a maximum of 500 characters */}
                <form onSubmit={handleSubmit} className='row gy-2 gx-3 align-items-center'>
                    <div className='form-group'>
                        <textarea onChange={(e) => setEntry(e.target.value)} className='form-control' rows='2' maxLength='500' required></textarea>
                        {/* TODO: Implement a character counter */}
                    </div>

                    <small className='form-text text-muted'>
                        You can write up to 500 characters.
                    </small>

                    {error && <small className='form-text text-danger'>{error}</small>}
                    {message &&
                        <div className='alert alert-success alert-dismissable fade show' role='alert'>
                            {message}
                            <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                        </div>
                    }

                    <div className='form-group'>
                        <button className='btn btn-outline-danger'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
