import React from 'react';
import Registrate from './components/Muhammadqodir/Registrate';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Registrate />
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        {/* <Route path="/talents" element={<Talents />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
