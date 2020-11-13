import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import UsersClass from './UsersClass';


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;