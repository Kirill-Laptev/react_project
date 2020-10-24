import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageArea from './MessageArea/MessageArea';

const Dialogs = (props) => {


  let dialogsElements = props.state.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.state.messagesData.map((el) => {
    return <Message text={el.text} />;
  });



  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.dialogs__messages}>{messagesElements}</div>
      <MessageArea 
      addDialogsPost={props.addDialogsPost} 
      updateDialogsPostText={props.updateDialogsPostText}
      newPostText={props.dialogsPage.newPostText}/>
    </div>
  );

};

export default Dialogs;