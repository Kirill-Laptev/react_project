import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addDialogsPost } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  }
}



const DialogsContainer = compose(
  connect(mapStateToProps, {
    addDialogsPost
  }),
  withAuthRedirect,
)(Dialogs)

export default DialogsContainer;