import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../temp/image/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../Paginator/Paginator';
import User from './User';


const UsersFunc = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {


  // В данном рефакторинге деструктуризация использована местами,
  // скорее всего она здесь не совсем уместна.

  let portionSize;

    return (
      <div>
        <Paginator 
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        portionSize={portionSize} />

        <div>
        {props.usersData.map((user) => <User
              user={user}
              followingInProgress={props.followingInProgress}
              unfollowSuccess={props.unfollowSuccess} 
              followSuccess={props.followSuccess}
              />
          )}
        </div>    
      </div>
    )
  }


export default UsersFunc;