import React from 'react';
import { addDialogsPostActionCreator, updateDialogsPostTextActionCreator } from '../../../redux/dialogsReducer';
import MessageArea from './MessageArea';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    newPostText: state.dialogsPage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePost: (text) => {
      dispatch(updateDialogsPostTextActionCreator(text));
    },
    postMessage: () => {
      dispatch(addDialogsPostActionCreator());
    }
  }
}

const MessageAreaContainer = connect(mapStateToProps, mapDispatchToProps)(MessageArea);


export default MessageAreaContainer;