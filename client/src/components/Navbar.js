// React imports
import React from 'react'

// React Router imports
import { Link } from 'react-router-dom'

export default function Navbar({ active })
{
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
                    {/* TODO: Set to disappear in sign in */}
                    <li className='nav-item'>
                        <Link to='/signin' className={`nav-link ${ active === 'signin' ? 'active' : '' }`}>
                            Sign In
                        </Link>
                    </li>

                    {/* TODO: Set to appear on sign in */}
                    <li className='nav-item'>
                        <Link to='/account' className={`nav-link ${ active === 'account' ? 'active' : '' }`}>
                            Account
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
