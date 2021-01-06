import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return(
        <div>
        <ProfileInfo userProfile={props.userProfile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto} 
        sendProfileInfo={props.sendProfileInfo}/>
        <MyPostsContainer />
      </div>
    )
}

export default Profile; 