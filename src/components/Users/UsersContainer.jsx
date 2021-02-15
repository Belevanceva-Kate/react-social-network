import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
// import UsersFunctional from './UsersFunctional';
import {
    actionCreatorSetUsers,
    actionCreatorSetCurrentPage,
    actionCreatorSetTotalCount,
    actionCreatorFollow,
    actionCreatorUnfollow
} from '../../redux/reducers/users';
import * as axios from "axios";



class UsersContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                // console.log(response);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then(response => {
                // console.log(response);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users
                users={ this.props.users }
                totalCount={ this.props.totalCount }
                pageSize={ this.props.pageSize }
                currentPage={ this.props.currentPage }
                follow={ this.props.follow }
                unfollow={ this.props.unfollow }
                onPageChanged={ this.onPageChanged }
            />
        );
    }
}



const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(actionCreatorSetUsers(users))
        },
        setCurrentPage: (page) => {
            dispatch(actionCreatorSetCurrentPage(page))
        },
        setTotalCount: (count) => {
            dispatch(actionCreatorSetTotalCount(count))
        },
        follow: (userId) => {
            dispatch(actionCreatorFollow(userId))
        },
        unfollow: (userId) => {
            dispatch(actionCreatorUnfollow(userId))
        }
    }
}

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersFunctional);

// export default UsersContainer;

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);