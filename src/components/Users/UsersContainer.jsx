import React from 'react';
import { connect } from 'react-redux';
import {
    setUsers,
    setCurrentPage,
    setTotalCount,
    follow,
    unfollow,
    toggleIsFetching
} from '../../redux/reducers/users';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
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
        isFetching: state.users.isFetching
    }
}

export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalCount,
    follow,
    unfollow,
    toggleIsFetching
})(UsersContainer);