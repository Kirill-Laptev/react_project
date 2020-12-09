import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className={styles.header}>
        <img src='https://sun9-8.userapi.com/c853620/v853620963/13b4d5/aFszB8VaQCY.jpg' alt='logo' />
        <div className={styles.loginBlock}>
          {props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to='/login'>Login</NavLink>}
        </div>
      </header>
    )
}

export default Header;