// React imports
import React from 'react';

// React Router imports
import { Route, Routes } from 'react-router-dom';

// Utility imports
import { AuthContextProvider } from './context/AuthContext';

// Screen imports
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Account from './screens/Account';

// Component imports
import ProtectedRoute from './components/ProtectedRoute';

function App()
{
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
