// React imports
import React from 'react';

// React Router imports
import { Route, Routes } from 'react-router-dom';

// Screen imports
import Home from './screens/Home';

function App()
{
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
