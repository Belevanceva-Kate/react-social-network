import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setProfile } from '../../redux/reducers/profile';
import Profile from './Profile';
import { profileAPI } from '../../api/api';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;

        if (!userId) { userId = 2; }

        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setProfile(data);
            });
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
        profile: state.profile.profile
    }
}

let ProfileContainerWithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setProfile
})(ProfileContainerWithUrlData);