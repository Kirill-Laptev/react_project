import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfileThunkCreator} from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';




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



let AuthRedirectComponent = withAuthRedirect(ProfileContainer)



let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  }
}


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);



export default connect(mapStateToProps, {
  getProfile: getProfileThunkCreator})(WithUrlDataContainerComponent); 