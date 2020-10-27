import React from 'react';


const MessageArea = (props) => {

  let addNewPost = React.createRef();


  let onChangePost = () => {
    let text = addNewPost.current.value;
    props.changePost(text);
  }

  let onPostMessage = () => {
    props.postMessage();
  }



    return (
        <div>
            <textarea ref={addNewPost} onChange={onChangePost} value={props.newPostText}></textarea>
            <button onClick={onPostMessage}>Отправить</button>
        </div>
    )
}

export default MessageArea;