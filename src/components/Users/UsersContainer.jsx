import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading } from '../../redux/usersReducer';
import * as axios from 'axios';
import UsersFunc from './UsersFunc';
import Preloader from '../common/Preloader/Preloader';


class UsersComponentAPI extends React.Component {
  
  
    componentDidMount() {
        this.props.toggleIsLoading(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      {withCredentials: true})
      .then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }


  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      {withCredentials: true})
      .then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.data.items);
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
    }
}





const UsersContainer = connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsLoading,
      })(UsersComponentAPI);

export default UsersContainer;