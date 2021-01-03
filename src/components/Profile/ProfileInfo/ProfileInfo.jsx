import React from 'react';
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Preloader from '../../../common/Preloader/Preloader'
import userPhoto from '../../../temp/image/user.png'


const ProfileInfo = ({userProfile, status, updateUserStatus, isOwner, savePhoto}) => {

  if(userProfile === null || userProfile === undefined){ // Или просто (!userProfile)
    return (
      <Preloader />
    )
  }

  const onPhotoSelected = (event) => {
    if(event.target.files.length){
      savePhoto(event.target.files[0])
    }
  }


  return (
    <div className={styles.profile}>
      <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
      <div className={styles.profileAvatar}><img src={userProfile.photos.large || userPhoto}/></div>
      {isOwner ? <input type='file' onChange={onPhotoSelected}/> : ''}
      <div>About Me</div>
      <div>Contacts</div>
      <div className={styles.lastDescription}>More description</div>
    </div>
  );
};

export default ProfileInfo;