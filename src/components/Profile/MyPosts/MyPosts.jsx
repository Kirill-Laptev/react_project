import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let addNewPost = React.createRef();

  let onAddPost = () => {
    props.addPost();  
  };


  let onPostChange = () => {
    let text = addNewPost.current.value; 
    props.updateNewPostText(text);
  }



  let postsElements = props.posts.map((el) => {
    return <Post message={el.message} likeCounts={el.likeCounts} />
  });

  return (
    <div className={classes.myposts}>
      My posts
      <div className={classes.newpost}>
        <div>
          <textarea onChange={onPostChange} ref={addNewPost} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;