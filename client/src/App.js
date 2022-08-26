// React imports
import React from 'react';

// React Router imports
import { Route, Routes } from 'react-router-dom';

// Screen imports
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

function App()
{
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
