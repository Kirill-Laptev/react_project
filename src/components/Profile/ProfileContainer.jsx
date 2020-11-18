import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';




class ProfileContainer extends React.Component {

  componentDidMount(){
    let userID = this.props.match.params.userID;
    if(!userID){
      userID = 2;
    }
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
    .then((response) => {
      this.props.setUserProfile(response.data);
      debugger;
    })
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer);



export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent); 