import React from 'react';
import styles from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import Preloader from '../../../common/Preloader/Preloader'


const ProfileInfo = (props) => {

  if(props.userProfile === null || props.userProfile === undefined){
    return (
      <Preloader />
    )
  }

  return (
    <div className={styles.profile}>
      {/* <img
        src="https://img4.goodfon.ru/original/2560x1440/5/a5/react-framework-logo.jpg"
        alt="main-img"
      /> */}
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
      <div className={styles.profileAvatar}><img src={props.userProfile.photos.large} /></div>
      <div>About Me</div>
      <div>Contacts</div>
      <div className={styles.lastDescription}>More description</div>
    </div>
  );
};

export default ProfileInfo;