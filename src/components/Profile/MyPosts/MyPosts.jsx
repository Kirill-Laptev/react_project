import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let addNewPost = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});       
  };


  let postChange = () => {
    let text = addNewPost.current.value; 
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  }



  let postsElements = props.posts.map((el) => {
    return <Post message={el.message} likeCounts={el.likeCounts} />;
  });

  return (
    <div className={classes.myposts}>
      My posts
      <div className={classes.newpost}>
        <div>
          <textarea onChange={postChange} ref={addNewPost} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;