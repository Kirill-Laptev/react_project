import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ProfileAddMessageReduxForm from './MyPostsForm';



const MyPosts = (props) => {

  
  let addNewPost = (values) => {
    props.addPost(values.newMessage);  
  };

  
  let postsElements = props.posts.map((el) => {
    return <Post message={el.message} likeCounts={el.likeCounts} />
  });
  

  return (
    <div className={classes.myposts}>
      My posts
      <div className={classes.newpost}>
        <ProfileAddMessageReduxForm onSubmit={addNewPost} />
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;