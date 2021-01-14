import Posts from './Posts/Posts';
import PostsContainer from './Posts/PostsContainer';
import Info from './Info/Info';
import cls from './Profile.module.css';

const Profile = (props) => {
	return (
		<div className={ cls.profile }>
			<Info />
			<PostsContainer store={ props.store } />
		</div>
	);
}

export default Profile;