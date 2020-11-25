import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator, followSuccessThunkCreator, unfollowSuccessThunkCreator } from '../../redux/usersReducer';
import UsersFunc from './UsersFunc';
import Preloader from '../common/Preloader/Preloader';



class UsersContainer extends React.Component {
  
  
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }


  onPageChanged = (pageNumber) => {
    // this.props.setCurrentPage(pageNumber);
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
    isLoading={this.props.isLoading}
    followingInProgress={this.props.followingInProgress}
    followSuccess={this.props.followSuccess}
    unfollowSuccess={this.props.unfollowSuccess}
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





export default connect(mapStateToProps, {
        getUsers: getUsersThunkCreator,
        followSuccess: followSuccessThunkCreator,
        unfollowSuccess: unfollowSuccessThunkCreator,

      })(UsersContainer);

