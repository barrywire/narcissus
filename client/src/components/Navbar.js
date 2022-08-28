// React imports
import React from 'react'

// React Router imports
import { Link } from 'react-router-dom'

// Utility imports
import { UserAuth } from '../context/AuthContext'

export default function Navbar({ active })
{

    const { user, logout } = UserAuth()

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
                            <button onClick={logout} className='btn btn-outline-danger'>
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
