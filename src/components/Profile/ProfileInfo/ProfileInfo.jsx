import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={classes.profile}>
      <img
        src="https://img4.goodfon.ru/original/2560x1440/5/a5/react-framework-logo.jpg"
        alt="main-img"
      />
      <div className={classes.description}>description</div>
    </div>
  );
};

export default ProfileInfo;