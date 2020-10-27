import React from 'react';
import { addDialogsPostActionCreator, updateDialogsPostTextActionCreator } from '../../../redux/dialogsReducer';
import MessageArea from './MessageArea';


const MessageAreaContainer = (props) => {

  let state = props.store.getState();

  let postMessage = () => {
      props.store.dispatch(addDialogsPostActionCreator());
  }

  let changePost = (text) => {
    props.store.dispatch(updateDialogsPostTextActionCreator(text));
  }


    return (
        <MessageArea
        postMessage={postMessage}
        changePost={changePost}
        newPostText={state.dialogsPage.newPostText}
        />
    )
}

export default MessageAreaContainer;