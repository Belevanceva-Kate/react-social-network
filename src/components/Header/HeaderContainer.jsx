import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header';
import { setAuthData, setUserData } from '../../redux/reducers/auth';



class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                // подтверждаем, что хотим для кроссдоменного запроса (с локал хоста на самурай) прикрепить куки
                withCredentials: true
            })
            .then((response) => {
                // 0 - success, other number - error
                if (response.data.resultCode === 0) {
                    let { id: userId, email, login } = response.data.data;
                    this.props.setAuthData(userId, email, login)

                    axios
                        .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
                        .then((response) => {
                            this.props.setUserData(response.data.photos.small);
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