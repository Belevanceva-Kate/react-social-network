import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
    setCurrentPage,
    requestUsers,
    follow,
    unfollow
} from '../../redux/reducers/users';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../selectors/users';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.requestUsers(page, this.props.pageSize);
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
                />
            </>
        );
    }
}



/*const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}*/
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        requestUsers,
        follow,
        unfollow
    }),
    withAuthRedirect
)(UsersContainer);