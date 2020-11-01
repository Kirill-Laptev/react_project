import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {


  let dialogsElements = props.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let messagesElements = props.messagesData.map((el) => {
    return <Message text={el.text} />;
  });


  let addNewPost = React.createRef();


  let onChangePost = () => {
    let text = addNewPost.current.value;
    props.changePost(text);
  }

  let onPostMessage = () => {
    props.postMessage();
  }


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>{dialogsElements}</div>
      <div className={classes.dialogs__messages}>{messagesElements}</div>
      <div>
            <textarea ref={addNewPost} onChange={onChangePost} value={props.newPostText}></textarea>
            <button onClick={onPostMessage}>Отправить</button>
        </div>
    </div>
  );

};

export default Dialogs;
