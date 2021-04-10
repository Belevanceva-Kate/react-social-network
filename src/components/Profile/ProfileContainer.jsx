import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/reducers/profile';
import Profile from './Profile';



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.id;

        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            // прокидываем все пропсы дочернему компоненту
            <Profile { ...this.props }
                profile={ this.props.profile }
                status={ this.props.status }
                updateStatus={ this.props.updateStatus }
                isOwner={ !this.props.match.params.id }
                savePhoto={ this.props.savePhoto }
            />
        );
    }
}



const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        status: state.profile.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);