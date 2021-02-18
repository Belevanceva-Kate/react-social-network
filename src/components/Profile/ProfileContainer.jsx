import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getProfile } from '../../redux/reducers/profile';
import Profile from './Profile';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;

        if (!userId) { userId = 2; }

        this.props.getProfile(userId);
    }

    render() {
        return (
            // прокидываем все пропсы дочернему компоненту
            <Profile { ...this.props }
                profile={ this.props.profile }
            />
        );
    }
}



const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        userId: state.auth.userId
    }
}

let ProfileContainerWithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getProfile
})(ProfileContainerWithUrlData);