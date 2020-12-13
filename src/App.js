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
import { connect } from 'react-redux';
import { inizializeAppTC } from './redux/appReducer';
import Preloader from './common/Preloader/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
 }

  render(){

    if(!this.props.initialized){
  		return <Preloader />
  	}

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar  />
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
}

let mapStateToProps = (state) => {
  return{
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initializeApp: inizializeAppTC})(App)
