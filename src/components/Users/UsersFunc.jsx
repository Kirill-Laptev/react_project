import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../temp/image/user.png'

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
        
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        <div>
          {props.usersData.map((user) => {
            return (
              <div>
                <span>
                  <div>
                    <img
                      className={styles.userPhoto}
                      src={user.photos.small ? user.photos.small : userPhoto}
                    />
                    <div>
                      {user.followed ? (
                        <button onClick={() => props.unfollow(user.id)}>
                          Unfollow
                        </button>
                      ) : (
                        <button onClick={() => props.follow(user.id)}>
                          Follow
                        </button>
                      )}
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