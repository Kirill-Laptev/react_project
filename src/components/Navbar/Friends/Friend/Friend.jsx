import React from 'react';
import classes from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
  return (
    <div className={classes.friends__item}>
      <img
        src="https://yt3.ggpht.com/a/AATXAJxJPBC_ez3BiUMEdVMI_FhYDpA9rzjFQ4Symfda=s900-c-k-c0xffffffff-no-rj-mo"
        alt="user"
      />
      <NavLink to={'/profile/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default Friend;