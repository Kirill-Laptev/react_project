import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';
import { Route } from 'react-router-dom';

const Friends = (props) => {

    const friendsElements = props.state.friendsBlock.friendsInfo.map((el) => {
        return <Friend name={el.name} id={el.id} />
    });


  return (
    <div className={classes.friends}>
      <div className={classes.friends__title}>Friends</div>
      <div className={classes.friends__items}>{friendsElements}</div>
    </div>
  );
};

export default Friends;