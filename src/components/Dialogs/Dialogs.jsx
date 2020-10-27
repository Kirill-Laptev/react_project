import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageAreaContainer from './MessageArea/MessageAreaContainer';

const Dialogs = (props) => {


  let state = props.store.getState();

  let dialogsElements = state.dialogsPage.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = state.dialogsPage.messagesData.map((el) => {
    return <Message text={el.text} />;
  });



  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.dialogs__messages}>{messagesElements}</div>
      <MessageAreaContainer store={props.store} />
    </div>
  );

};

export default Dialogs;
