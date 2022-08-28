// React imports
import React, { useState } from 'react'

// React router dom imports
import { useNavigate } from 'react-router-dom'

// Component imports
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

// Utility imports
import { UserAuth } from '../context/AuthContext'

export default function SignUp()
{
    const navigate = useNavigate();

    const { createUser } = UserAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        setError('')
        try
        {
            await createUser(email, password)
            // clear the form
            setEmail('')
            setPassword('')

            navigate('/')
        } catch (error)
        {
            setError(error.message)
            console.log(error.message)
        }
    }

    return (
        <>
            <Meta title='Sign In - Narcissus' />
            <Navbar />

            <div className='container py-3'>
                <h5>
                    Create Account.
                </h5>


                <form onSubmit={handleSubmit} className='row g-3 px-5'>
                    <div className='col-md-6'>
                        <label htmlFor='inputemail' className='form-label'>Email</label>
                        <input type='email' onChange={(e) => setEmail(e.target.value)} name='email' className='form-control' id='inputemail' />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='inputpass' className='form-label'>Password</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} name='password' className='form-control' id='inputpass' />
                    </div>

                    {error &&
                        <div className='col-12'>
                            <div className='alert alert-danger alert-dismissible fade show' role='alert'>
                                {error.message}
                                <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                            </div>
                        </div>
                    }
                    {/* TODO: Add password confirmation functionality */}
                    {/* <div className='col-md-6'>
                        <label htmlFor='inputpassconf' className='form-label'>Confirm Password</label>
                        <input type='password' name='passwordconf' className='form-control' id='inputpassconf' />
                    </div> */}

                    <span>
                        Already have an account? <a href='/signin'>Sign in</a>
                    </span>

                    <div className='col-12'>
                        <button type='submit' className='btn btn-outline-danger'>Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}
