import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Signup from './components/Profile/Signup/Signup';
import Profile from './components/Profile/Profile';
import NewsContent from './components/NewsContents/NewsContents';
import Foot from './components/Foot/Foot';
import { Route, Switch } from 'react-router';

function App() {
  const [show, setShow] = useState(false);

  const handleDropDown = () => {
    setShow(prev => !prev);
}

  return (
    <div className="app">
     
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <NavBar show={show} handleDropDown={handleDropDown} />
          <NewsContent show={show} handleDropDown={handleDropDown} />
          <Foot />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;