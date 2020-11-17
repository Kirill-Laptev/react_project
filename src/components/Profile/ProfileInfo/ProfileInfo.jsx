import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

  if(props.userProfile === null || props.userProfile === undefined){
    return (
      <Preloader />
    )
  }

  return (
    <div className={classes.profile}>
      <img
        src="https://img4.goodfon.ru/original/2560x1440/5/a5/react-framework-logo.jpg"
        alt="main-img"
      />
      <img src={props.userProfile.photos.large} />
      <div className={classes.description}>description</div>
    </div>
  );
};

export default ProfileInfo;