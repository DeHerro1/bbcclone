import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import NewsContent from './components/NewsContents/NewsContents';

function App() {
  const [show, setShow] = useState(false);

  const handleDropDown = () => {
    setShow(prev => !prev);
}

  return (
    <BrowserRouter>
     <NavBar show={show} handleDropDown={handleDropDown} />
     <NewsContent show={show} handleDropDown={handleDropDown} />
    </BrowserRouter>
  );
}

export default App;