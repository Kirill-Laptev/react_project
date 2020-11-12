import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../temp/image/user.png'



class UsersClass extends React.Component {

    constructor(props){
        super(props);
        alert('NEW');  
        };

        componentDidMount(){
            //if (this.props.usersData.length === 0) {
                axios
                  .get("https://social-network.samuraijs.com/api/1.0/users")
                  .then((response) => {
                    this.props.setUsers(response.data.items);
                  });
              //}
        }


  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
        <div>
          {this.props.usersData.map((user) => {
            return (
              <div>
                <span>
                  <div>
                    <img
                      className={classes.userPhoto}
                      src={user.photos.small ? user.photos.small : userPhoto}
                    />
                    <div>
                      {user.followed ? (
                        <button onClick={() => this.props.unfollow(user.id)}>
                          Unfollow
                        </button>
                      ) : (
                        <button onClick={() => this.props.follow(user.id)}>
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
}


    


export default UsersClass;