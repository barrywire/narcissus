// React imports
import React from 'react'

// React router dom imports
import { Navigate } from 'react-router-dom'

// Utility imports
import { UserAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children })
{
    const { user } = UserAuth()

    if (!user)
    {
        return <Navigate to='/' />
    }
    return children
}
