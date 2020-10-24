import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
  return <div className={classes.messages}>{props.text}</div>;
};

export default Message;