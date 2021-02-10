import { connect } from 'react-redux';
import Users from './Users';
import { actionCreatorSetUsers, actionCreatorFollow, actionCreatorUnfollow } from '../../redux/reducers/users';

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(actionCreatorSetUsers(users))
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