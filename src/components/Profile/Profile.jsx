import PostsContainer from './Posts/PostsContainer';
import Info from './Info/Info';
import cls from './Profile.module.css';

const Profile = (props) => {
	return (
		<div className={ cls.profile }>
			<Info profile={ props.profile } />
			<PostsContainer />
		</div>
	);
}

export default Profile;