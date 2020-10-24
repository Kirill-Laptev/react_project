import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';




  const DialogItem = (props) => {
    return (
      <div className={classes.dialog}>
        <img src="https://im0-tub-ru.yandex.net/i?id=d84f452cb35928f4eced6eb5444bdde5&n=13" alt="user" />
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
  
    );
  };


export default DialogItem;