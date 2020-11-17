import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';




class ProfileContainer extends React.Component {

  componentDidMount(){
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/10')
    .then((response) => {
      this.props.setUserProfile(response.data);
    })
  }

  render () {
    return(
      <div>
      <Profile {...this.props} userProfile={this.props.userProfile}/>
    </div>
  )
  }
}


let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  }
}




export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer); 