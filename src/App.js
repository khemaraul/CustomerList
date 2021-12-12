import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from './components/Pages/Login';
import RouteList from './Routes/routList';

const App = () => {
  const userData = localStorage.getItem('userDetails');
  console.log("88", userData);
  return (<>
    <RouteList />
    {/* {userData === null && <LoginPage />} */}
    </>
  );
};

export default App;
