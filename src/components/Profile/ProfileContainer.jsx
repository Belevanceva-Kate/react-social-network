import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as axios from 'axios';
import { setProfile } from '../../redux/reducers/profile';
import Profile from './Profile';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id;

        if (!userId) { userId = 2; }

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${ userId }`)
            .then(response => {
                this.props.setProfile(response.data);
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