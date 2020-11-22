import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/usersReducer';
import * as axios from 'axios';
import UsersFunc from './UsersFunc';
import Preloader from '../common/Preloader/Preloader';



class UsersComponentAPI extends React.Component {
  
  
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }


  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);   
  }


  render() {
      
   return  <>
   {this.props.isLoading ? <Preloader /> : null}
   <UsersFunc 
    totalUsersCount={this.props.totalUsersCount}
    pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}
    onPageChanged={this.onPageChanged}
    usersData={this.props.usersData}
    unfollow={this.props.unfollow}
    follow={this.props.follow}
    isLoading={this.props.isLoading}
    followingInProgress={this.props.followingInProgress}
    toggleFollowingProgress={this.props.toggleFollowingProgress}
     />
      </>
  } 
}



let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
    }
}





const UsersContainer = connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator,
      })(UsersComponentAPI);

export default UsersContainer;