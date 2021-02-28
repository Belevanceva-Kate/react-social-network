import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfile, getStatus, updateStatus } from '../../redux/reducers/profile';
import Profile from './Profile';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;

        if (!userId) { userId = this.props.userId; }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            // прокидываем все пропсы дочернему компоненту
            <Profile { ...this.props }
                profile={ this.props.profile }
                status={ this.props.status }
                updateStatus={ this.props.updateStatus }
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
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);