import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator, getUserStatusTC, updateUserStatusTC, savePhotoTC} from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect'; // Используем другой аналог редиректа history.push('/login') 
import { compose } from 'redux';




class ProfileContainer extends React.Component {


  refreshProfile() {
    let userID = this.props.match.params.userID;
    if(!userID){
      userID = this.props.authorizedUserID;
    }
    if(!userID){
      this.props.history.push('/login');
    }

      this.props.getUserProfile(userID);
      this.props.getUserStatus(userID);
  }

  componentDidMount(){
    this.refreshProfile()
  }


  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.userID !== this.props.match.params.userID){
      this.refreshProfile()
    }
  }


  render () {
    return(
      <div>
      <Profile {...this.props} 
      userProfile={this.props.userProfile}
      status={this.props.status}
      updateUserStatus={this.props.updateUserStatus}
      isOwner={!this.props.match.params.userID} // Если в значении undefined, то !undefined даст true
      savePhoto={this.props.savePhoto} /> 
    </div>
  )
  }
}


let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.id,
    isAuth: state.auth.isAuth,
    fake: state.profilePage.fakeNum
  }
}


export default compose(
  connect(mapStateToProps, {
    getUserProfile: getProfileThunkCreator,
    getUserStatus: getUserStatusTC,
    updateUserStatus: updateUserStatusTC,
    savePhoto: savePhotoTC}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)



