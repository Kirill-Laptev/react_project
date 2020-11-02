import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {

    if(props.usersData.length === 0){
        props.setUsers([{id: 1, photoUrl: 'https://www.verwin.com/assets/images/user-avatar.png', followed: false, name: 'Dmitry K.', status: "I'am looking for a Job right now...", location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, photoUrl: 'https://www.verwin.com/assets/images/user-avatar.png', followed: false, name: 'Svetlana D.', status: "I'am so pretty", location: {country: 'Belarus', city: 'Minsk'}},
        {id: 3, photoUrl: 'https://www.verwin.com/assets/images/user-avatar.png', followed: true, name: 'Sergei S.', status: "I like footbal", location: {country: 'Ukraine', city: 'Kiev'}},
        {id: 4, photoUrl: 'https://www.verwin.com/assets/images/user-avatar.png', followed: true, name: 'Andrew T.', status: "I can help you create good video promotion", location: {country: 'USA', city: 'Philadelphia'}}]);
    }



    let blockElements = props.usersData.map((user) => {
    return <div>
        <span>
            <div>
                <img className={classes.userPhoto} src={user.photoUrl} />
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
        <div>{user.location.country}</div>
        <div>{user.location.city}</div>
    </span>
        </span>
    </div>
    })



    return (
        <div>{blockElements}</div>
    )
}


export default Users;