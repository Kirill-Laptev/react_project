import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator, getUserStatusTC, updateUserStatusTC} from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

  componentDidMount(){
    let userID = this.props.match.params.userID;
    if(!userID){
      userID = this.props.authorizedUserID;
    }
      this.props.getUserProfile(userID);
      this.props.getUserStatus(userID);
  }

  render () {
    return(
      <div>
      <Profile {...this.props} 
      userProfile={this.props.userProfile}
      status={this.props.status}
      updateUserStatus={this.props.updateUserStatus} />
    </div>
  )
  }
}


let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.id,
    isAuth: state.auth.isAuth
  }
}


export default compose(
  connect(mapStateToProps, {
    getUserProfile: getProfileThunkCreator,
    getUserStatus: getUserStatusTC,
    updateUserStatus: updateUserStatusTC}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)



