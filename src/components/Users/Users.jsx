import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../temp/image/user.png'

const Users = (props) => {

    const getUsers = () => {
        if(props.usersData.length === 0){

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                props.setUsers(response.data.items);
        })
    }
}

    



    let blockElements = props.usersData.map((user) => {
    return <div>
        <span>
            <div>
                <img className={classes.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} />
                <div>
                {user.followed ? <button onClick={ () => props.unfollow(user.id)}>Unfollow</button> : 
                <button onClick={ () => props.follow(user.id)}>Follow</button> }                
                </div>
            </div>
        </span>
        <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
    <span>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
    </span>
        </span>
    </div>
    })


    return (
        <div>
        <button onClick={getUsers}>Get Users</button>
        <div>{blockElements}</div>
        </div>
    )
}


export default Users;