import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator, followSuccessThunkCreator, unfollowSuccessThunkCreator } from '../../redux/usersReducer';
import UsersFunc from './UsersFunc';
import Preloader from '../../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsersData, getTotalCurrentPage, getIsLoading, getPageSize, getFollowingInProgress } from '../../redux/user-selector';



class UsersContainer extends React.Component {
  
  
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }


  onPageChanged = (pageNumber) => {
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



// let mapStateToProps = (state) => {
//     return {
//         usersData: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isLoading: state.usersPage.isLoading,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }



let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalCurrentPage(state),
        currentPage: state.usersPage.currentPage,
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
    }
}



export default compose(
  connect(mapStateToProps, {
    getUsers: getUsersThunkCreator,
    followSuccess: followSuccessThunkCreator,
    unfollowSuccess: unfollowSuccessThunkCreator,
  }),
  withAuthRedirect
)(UsersContainer)


