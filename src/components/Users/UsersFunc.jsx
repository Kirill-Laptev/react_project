import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../temp/image/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

const UsersFunc = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++){  // Временно выводим 20 страниц
      pages.push(i);
    }

    return (
      <div>
      <div>
       {pages.map((page) => {
          return <span className={props.currentPage === page ? styles.selectedPage : ''}
          onClick={ () => {props.onPageChanged(page)}}>{page + ' '}</span>
        })}
      </div>

        <div>
          {props.usersData.map((user) => {
            return (
              <div>
                <span>
                  <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img
                      className={styles.userPhoto}
                      src={user.photos.small ? user.photos.small : userPhoto}
                    />
                    </NavLink>
                    <div>
                      {user.followed 
                        ? (<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                          props.toggleFollowingProgress(true, user.id);
                          usersAPI.unfollowRequest('follow/', user.id)
                          .then((response) => {
                            if(response.data.resultCode === 0){
                              props.unfollow(user.id);
                            }
                            props.toggleFollowingProgress(false, user.id);
                          })
                          
                        }}>
                          Unfollow
                        </button>)
                      :  (<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.toggleFollowingProgress(true, user.id);
                        usersAPI.followRequest('follow/', user.id)
                        .then((response) => {
                          if(response.data.resultCode === 0){
                            props.follow(user.id)
                          }
                         
                          props.toggleFollowingProgress(false, user.id);
                          debugger;
                        })
                      }}>
                        Follow
                      </button>)
                      }
                    </div>
                  </div>
                </span>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                  <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }


export default UsersFunc;