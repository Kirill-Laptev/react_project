import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogsFormRedux from './DialogsForm';


const Dialogs = (props) => {


  let dialogsElements = props.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.messagesData.map((el) => {
    return <Message text={el.text} />;
  });



  const AddMessage = (values) => {
    props.addDialogsPost(values.newMessage)
  }

 

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.dialogs__messages}>{messagesElements}</div>
      <DialogsFormRedux onSubmit={AddMessage} />
    </div>
  );

};

export default Dialogs;
