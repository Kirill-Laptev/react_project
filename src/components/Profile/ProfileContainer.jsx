import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator} from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';




class ProfileContainer extends React.Component {

  componentDidMount(){
    let userID = this.props.match.params.userID;
    if(!userID){
      userID = 2;
    }
      this.props.getProfile(userID);
  }

  render () {
    if(this.props.isAuth === false){       
      return <Redirect to={'/login'} />
    }

    return(
      <div>
      <Profile {...this.props} userProfile={this.props.userProfile} />
    </div>
  )
  }
}


let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
  }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);



export default connect(mapStateToProps, {
  getProfile: getProfileThunkCreator})(WithUrlDataContainerComponent); 