import React from 'react';
import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

 
const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postsData
  }
}



const MyPostsContainer = connect(mapStateToProps, {
  addPost
})(MyPosts);

export default MyPostsContainer;