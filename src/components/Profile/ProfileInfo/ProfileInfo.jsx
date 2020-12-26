import React from 'react';
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Preloader from '../../../common/Preloader/Preloader'


const ProfileInfo = ({userProfile, status, updateUserStatus}) => {

  if(userProfile === null || userProfile === undefined){
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
      <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
      <div className={styles.profileAvatar}><img src={userProfile.photos.large} /></div>
      <div>About Me</div>
      <div>Contacts</div>
      <div className={styles.lastDescription}>More description</div>
    </div>
  );
};

export default ProfileInfo;