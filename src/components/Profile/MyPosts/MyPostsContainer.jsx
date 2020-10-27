import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, postChangeActionCreator } from '../../../redux/profileReducer';




const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());    
  };


  let postChange = (text) => {
    let action = postChangeActionCreator(text); 
    props.store.dispatch(action);
  }


  return (
      // Разное название свойств зависит от вызова внутри компоненты MyPosts
    <MyPosts 
    updateNewPostText={postChange} 
    addPost={addPost} 
    posts={state.profilePage.postsData}
    newPostText={state.profilePage.newPostText} />
  );
};

export default MyPostsContainer;