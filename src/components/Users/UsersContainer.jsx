import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading, toggleFollowingProgress } from '../../redux/usersReducer';
import * as axios from 'axios';
import UsersFunc from './UsersFunc';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';



class UsersComponentAPI extends React.Component {
  
  
    componentDidMount() {
        this.props.toggleIsLoading(true);
    
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
      });
  }


  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);
    
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.items);
      });
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
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsLoading,
        toggleFollowingProgress,
      })(UsersComponentAPI);

export default UsersContainer;