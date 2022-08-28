// React imports
import React, { useState } from 'react'

// React router dom imports
import { useNavigate } from 'react-router-dom'

// Component imports
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

// Utility imports
import { UserAuth } from '../context/AuthContext'

export default function SignIn()
{
    const navigate = useNavigate()

    const { signIn } = UserAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        setError('')
        try
        {
            await signIn(email, password)
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
            <Navbar active='signin' />

            <div className='container py-3'>
                <h5>
                    Welcome back.
                </h5>


                <form onSubmit={handleSubmit} className='row g-3 px-5'>
                    <div className='col-md-6'>
                        <label htmlFor='inputemail' className='form-label'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' className='form-control' id='inputemail' />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='inputpass' className='form-label'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type='password' name='password' className='form-control' id='inputpass' />
                    </div>
                    {error &&
                        <div className='col-12'>
                            <div className='alert alert-danger alert-dismissible fade show' role='alert'>
                                {error.message}
                                <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                            </div>
                        </div>
                    }
                    <span>
                        Don't have an account? <a href='/signup'>Sign up</a>
                    </span>
                    <div className='col-12'>
                        <button type='submit' className='btn btn-outline-danger'>Sign in</button>
                    </div>
                </form>
            </div>
        </>
    )
}
