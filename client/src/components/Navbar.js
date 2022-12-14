// React imports
import React from 'react'

// React Router imports
import { Link, useNavigate } from 'react-router-dom'

// Utility imports
import { UserAuth } from '../context/AuthContext'

export default function Navbar({ active })
{
    const navigate = useNavigate();

    const { user, logout } = UserAuth()

    const handleLogout = async () =>
    {
        try
        {
            await logout()
            navigate('/')
            console.log('You are logged out')
        } catch (error)
        {
            console.log(error.message)
        }
    }

    return (
        <div className='container border-bottom'>
            <nav className='navbar justify-content-between'>
                <Link to='/' className='navbar-brand'>
                    <span className='font-weight-bold'>
                        Narcissus
                        <br />
                        <small>
                            The Random Journal Website.
                        </small>
                    </span>
                </Link>

                <ul className='nav nav-pills justify-content-between'>
                    {/* TODO: Set to appear on sign in */}
                    {user ? (
                        <li className='nav-item'>
                            <Link to='/account' className={`nav-link ${ active === 'account' ? 'active' : '' }`}>
                                Account
                            </Link>
                        </li>
                    ) : null}

                    {/* TODO: Set to disappear in sign in */}
                    {user ? (
                        <li className='nav-item'>
                            {/* Button to sign out */}
                            <button onClick={handleLogout} className='btn btn-outline-danger'>
                                Sign Out
                            </button>
                        </li>
                    ) : (
                        <li className='nav-item'>
                            <Link to='/signin' className={`  nav-link ${ active === 'signin' ? 'active' : '' }`}>
                                Sign In
                            </Link>
                        </li>
                    )}

                </ul>
            </nav>
        </div>
    )
}
