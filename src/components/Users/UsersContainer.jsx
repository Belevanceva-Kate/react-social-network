import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import {
    setUsers,
    setCurrentPage,
    setTotalCount,
    follow,
    unfollow,
    toggleIsFetching
} from '../../redux/reducers/users';
import Preloader from "../common/Preloader/Preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                // console.log(response);
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then(response => {
                // console.log(response);
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
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

/*const mapDispatchToProps = (dispatch) => {
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(actionCreatorToggleIsFetching(isFetching))
        }
    }
}*/

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersFunctional);

// export default UsersContainer;

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalCount,
    follow,
    unfollow,
    toggleIsFetching
})(UsersContainer);