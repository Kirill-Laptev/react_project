import React from 'react';
import classes from './MessageArea.module.css';
import { addDialogsPostActionCreator, updateDialogsPostTextActionCreator } from '../../../redux/state';

const MessageArea = (props) => {

  let addNewPost = React.createRef();

  let postMessage = () => {
      let text = addNewPost.current.value;
      props.dispatch(addDialogsPostActionCreator(text));
  }

  let changePost = () => {
    let text = addNewPost.current.value;
    props.dispatch(updateDialogsPostTextActionCreator(text));
  }


    return (
        <div>
            <textarea ref={addNewPost} onChange={changePost} value={props.newPostText}></textarea>
            <button onClick={postMessage}>Отправить</button>
        </div>
    )
}

export default MessageArea;