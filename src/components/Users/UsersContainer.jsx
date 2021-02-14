import { connect } from 'react-redux';
import Users from './Users';
import {
    actionCreatorSetUsers,
    actionCreatorSetCurrentPage,
    actionCreatorSetTotalCount,
    actionCreatorFollow,
    actionCreatorUnfollow
} from '../../redux/reducers/users';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;