import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { updateDialogsPostTextActionCreator, addDialogsPostActionCreator } from '../../redux/dialogsReducer';



const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newPostText: state.dialogsPage.newPostText,
    isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;