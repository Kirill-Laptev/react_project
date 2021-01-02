import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings _/Settings';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { inizializeAppTC } from './redux/appReducer';
import Preloader from './common/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


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
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/profile/:userID?' render={withSuspense(ProfileContainer)} />
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

const AppContainer = connect(mapStateToProps, {initializeApp: inizializeAppTC})(App)

const MainApp = (props) => {
  return(
    <HashRouter>
    <Provider store={store}>
      <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default MainApp;