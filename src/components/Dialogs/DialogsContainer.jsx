import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { updateDialogsPostTextActionCreator, addDialogsPostActionCreator } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newPostText: state.dialogsPage.newPostText,
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


const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)

export default DialogsContainer;