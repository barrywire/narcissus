// React imports
import React from 'react';

// React Router imports
import { Route, Routes } from 'react-router-dom';

// Screen imports
import Home from './screens/Home';
import Write from './screens/Write';

function App()
{
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/write' element={<Write />} />
    </Routes>
  );
}

export default App;
