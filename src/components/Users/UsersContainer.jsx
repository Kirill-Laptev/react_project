import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';
import UsersClass from './UsersClass';


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;