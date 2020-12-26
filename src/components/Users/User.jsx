import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../temp/image/user.png'
import { NavLink } from 'react-router-dom';


const User = ({user, followingInProgress, unfollowSuccess, followSuccess}) => {



  return (
    <div>
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
                  ? (<button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollowSuccess(user.id);
                    
                  }}>
                    Unfollow
                  </button>)
                :  (<button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                  followSuccess(user.id);

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
</div>
);
}


export default User;