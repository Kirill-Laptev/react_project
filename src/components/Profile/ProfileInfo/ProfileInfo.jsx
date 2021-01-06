import React from 'react';
import styles from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Preloader from '../../../common/Preloader/Preloader'
import userPhoto from '../../../temp/image/user.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({userProfile, status, updateUserStatus, isOwner, savePhoto, sendProfileInfo}) => {

  let [editMode, setEditMode] = useState(false);

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

  const onSubmit = (formData) => {
     sendProfileInfo(formData)
     .then(() => {
      setEditMode(false);
     })
  }


  return (
    <div className={styles.profile}>
      <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
      <div className={styles.profileAvatar}><img src={userProfile.photos.large || userPhoto}/></div>
      {isOwner ? <input type='file' onChange={onPhotoSelected}/> : ''}
      <div>
        {editMode 
        ? <ProfileDataForm initialValues={userProfile} setEditMode={setEditMode} onSubmit={onSubmit} userProfile={userProfile}/> 
        : <ProfileData userProfile={userProfile}
        isOwner={isOwner}
        setEditMode={setEditMode}/> }
      </div>
    </div>
  );
};




const Contacts = ({contactTitle, contactValue}) => {
  return (
  <div><b>{contactTitle}: </b>{contactValue}</div>
  )
}


const ProfileData = ({userProfile, isOwner, setEditMode}) => {
  return (
    <div>
      {isOwner ? <button onClick={() => setEditMode(true)}>Edit Profile</button> : ''}
      <div><b>Looking for a job: </b>{userProfile.lookingForAJob ? 'yes' : 'no' }</div>
      <div><b>My skills: </b>{userProfile.lookingForAJobDescription}</div>
      <div><b>Full name: </b>{userProfile.fullName}</div>
      <div><b>About me: </b>{userProfile.aboutMe}</div>
      <div>
        <h3>Contacts</h3>
        {Object.keys(userProfile.contacts).map((key) => {
          return <Contacts contactTitle={key} contactValue={userProfile.contacts[key]}/>
        })}
      </div>
    </div>
  ) 
}






export default ProfileInfo;