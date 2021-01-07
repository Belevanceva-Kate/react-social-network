import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';
import cls from './Profile.module.css';

const Profile = () => {
	return (
		<div className={ cls.profile }>
			<Info />
			<MyPosts />
		</div>
	);
}

export default Profile;