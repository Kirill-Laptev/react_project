import React from 'react';
import { addDialogsPostActionCreator, updateDialogsPostTextActionCreator } from '../../../redux/dialogsReducer';
import MessageArea from './MessageArea';
import StoreContext from '../../../StoreContext';


const MessageAreaContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let postMessage = () => {
          store.dispatch(addDialogsPostActionCreator());
        };

        let changePost = (text) => {
          store.dispatch(updateDialogsPostTextActionCreator(text));
        };

        return (
          <MessageArea
            postMessage={postMessage}
            changePost={changePost}
            newPostText={state.dialogsPage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessageAreaContainer;