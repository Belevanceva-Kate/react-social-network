import Posts from './Posts/Posts';
import Info from './Info/Info';
import cls from './Profile.module.css';

const Profile = (props) => {
	return (
		<div className={ cls.profile }>
			<Info />
			<Posts 
				posts={ props.state.posts } 
				newPostContent={ props.state.newPostContent }
				dispatch={ props.dispatch }
			/>
		</div>
	);
}

export default Profile;