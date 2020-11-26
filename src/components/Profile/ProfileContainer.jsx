import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator} from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

  componentDidMount(){
    let userID = this.props.match.params.userID;
    if(!userID){
      userID = 2;
    }
      this.props.getProfile(userID);
  }

  render () {
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
  }
}


export default compose(
  connect(mapStateToProps, {
    getProfile: getProfileThunkCreator}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)



