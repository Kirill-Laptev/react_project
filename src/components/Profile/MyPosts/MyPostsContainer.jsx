import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, postChangeActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';




const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        
        let state = store.getState();

        let addPost = () => {
         store.dispatch(addPostActionCreator());    
        };
      
      
        let postChange = (text) => {
          let action = postChangeActionCreator(text); 
          store.dispatch(action);
        };

        return <MyPosts 
        updateNewPostText={postChange} 
        addPost={addPost} 
        posts={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText} />
        }
      } 
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;