import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings _/Settings';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs 
          state={props.state.dialogsPage}
          dialogsPage={props.state.dialogsPage}
          addDialogsPost={props.addDialogsPost}
          updateDialogsPostText={props.updateDialogsPostText} /> } />
          <Route path='/profile' render={ () => <Profile 
          profilePage={props.state.profilePage} 
          dispatch={props.dispatch} /> } 
          />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    
  );
}

export default App;