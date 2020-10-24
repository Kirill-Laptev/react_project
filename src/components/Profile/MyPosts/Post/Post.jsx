import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://im0-tub-ru.yandex.net/i?id=d84f452cb35928f4eced6eb5444bdde5&n=13"
        alt="user"
      />
      <span>{props.message}</span>
      <div>
        <span>likes {props.likeCounts}</span>
      </div>
    </div>
  );
};

export default Post;
