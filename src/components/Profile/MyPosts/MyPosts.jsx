import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import ProfileAddMessageReduxForm from './MyPostsForm';




class MyPosts extends React.PureComponent {

  componentDidMount(){
    setTimeout(() => {
      this.setState({a: 12});
    }, 3000)
  }
 

  // shouldCoponentUpdate(nextProps, nextState){
  //   return nextProps !== this.props || nextState !== this.state
  // }
  

  addNewPost = (values) => {
    this.props.addPost(values.newMessage);  
  };

  
  render(){
    console.log('render')
    return <div className={classes.myposts}>
        My posts
        <div className={classes.newpost}>
          <ProfileAddMessageReduxForm onSubmit={this.addNewPost} />
        </div>
        <div className={classes.posts}>{this.props.posts.map((el) => {
    return <Post message={el.message} likeCounts={el.likeCounts} />
    })}</div>
      </div>
    
  }
  
};

export default MyPosts;