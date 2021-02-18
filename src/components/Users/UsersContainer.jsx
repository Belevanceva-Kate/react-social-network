import React from 'react';
import { connect } from 'react-redux';
import {
    setCurrentPage,
    getUsers,
    follow,
    unfollow
} from '../../redux/reducers/users';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users
                    users={ this.props.users }
                    totalCount={ this.props.totalCount }
                    pageSize={ this.props.pageSize }
                    currentPage={ this.props.currentPage }
                    follow={ this.props.follow }
                    unfollow={ this.props.unfollow }
                    onPageChanged={ this.onPageChanged }
                    followingInProgress={ this.props.followingInProgress }
                    // toggleFollowingInProgress={ this.props.toggleFollowingInProgress }
                />
            </>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    follow,
    unfollow
})(UsersContainer);