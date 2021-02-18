import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthData, setUserData } from '../../redux/reducers/auth';
import { authAPI, profileAPI } from '../../api/api';



class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuthMe()
            .then((data) => {
                // 0 - success, other number - error
                if (data.resultCode === 0) {
                    let { id: userId, email, login } = data.data;
                    this.props.setAuthData(userId, email, login)

                    profileAPI.getProfile(userId)
                        .then((data) => {
                            this.props.setUserData(data.photos.small);
                        });
                }
            });
    }

    render() {
        return (
            <Header { ...this.props } />
        );
    }
}



const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.auth.avatar
    }
}

export default connect(mapStateToProps, { setAuthData, setUserData })(HeaderContainer);