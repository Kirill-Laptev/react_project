import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';


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



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;