import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/reducers/auth';



class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, { logout })(HeaderContainer);