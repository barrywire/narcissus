// React imports
import React from 'react'

// Component imports
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

export default function SignIn()
{
    return (
        <>
            <Meta title='Sign In - Narcissus' />
            <Navbar active='signin' />

            <div className='container py-3'>
                <h5>
                    Welcome back.
                </h5>


                <form className='row g-3 px-5'>
                    <div className='col-md-6'>
                        <label htmlFor='inputemail' className='form-label'>Email</label>
                        <input type='email' name='email' className='form-control' id='inputemail' />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='inputpass' className='form-label'>Password</label>
                        <input type='password' name='password' className='form-control' id='inputpass' />
                    </div>
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
