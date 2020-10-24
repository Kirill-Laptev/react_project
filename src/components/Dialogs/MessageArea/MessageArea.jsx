import React from 'react';
import classes from './MessageArea.module.css';

const MessageArea = (props) => {

  let addNewPost = React.createRef();

  let postMessage = () => {
      let text = addNewPost.current.value;
      props.addDialogsPost(text);
      addNewPost.current.value = '';
  }

  let changePost = () => {
    let text = addNewPost.current.value;
    props.updateDialogsPostText(text);
    addNewPost.current.value = '';
  }


    return (
        <div>
            <textarea ref={addNewPost} onChange={changePost} value={props.newPostText}></textarea>
            <button onClick={postMessage}>Отправить</button>
        </div>
    )
}

export default MessageArea;