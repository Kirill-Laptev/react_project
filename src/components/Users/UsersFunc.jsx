import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../temp/image/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const UsersFunc = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];

    for(let i = 1; i <= 20; i++){  // Временно выводим 20 страниц
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
                        ? (<button onClick={() => {
                          axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + user.id,
                          {withCredentials: true,
                          headers: {
                            'API-KEY': '2c25ddf9-0550-4467-a44b-abb06d695935'
                          }})
                          .then((response) => {
                            if(response.data.resultCode === 0){
                              props.unfollow(user.id);
                            }
                          })
                          
                        }}>
                          Unfollow
                        </button>)
                      :  (<button onClick={() => {
                        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {},
                        {withCredentials: true, 
                        headers: {
                          'API-KEY': '2c25ddf9-0550-4467-a44b-abb06d695935'
                        }})
                        .then((response) => {
                          if(response.data.resultCode === 0){
                            props.follow(user.id)
                          }
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