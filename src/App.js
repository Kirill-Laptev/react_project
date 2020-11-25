import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings _/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
  return (
    
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={props.state} />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/profile/:userID?' render={ () => <ProfileContainer /> } />
          <Route path='/users' render = { () => <UsersContainer />} />
          <Route path='/music' component={Music} /> 
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    
  );
}

export default App;
