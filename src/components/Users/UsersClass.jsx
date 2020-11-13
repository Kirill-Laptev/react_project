import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../temp/image/user.png'



class UsersClass extends React.Component {
  
  
    componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }


  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }


  render() {
    
    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }

    return (
      <div>
      <div>
       {pages.map((page) => {
          return <span className={this.props.currentPage === page ? styles.selectedPage : ''}
          onClick={ () => { this.onPageChanged(page)}}>{page}</span>
        })}
      </div>
        
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        <div>
          {this.props.usersData.map((user) => {
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