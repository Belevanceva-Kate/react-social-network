import Post from './Post/Post';
import cls from './MyPosts.module.css';

const MyPosts = () => {

	let posts = [
		{ id: 1, message: 'Hi! How are you?i', likesCount: 0 },
		{ id: 2, message: 'It`s my first post', likesCount: 20 },
	];

	let postElements = posts.map((el, i) => {
		return <Post message={ el.message } likesCount={ el.likesCount } />
	});

	return (
		<div className={ cls.postsBlock }>
			<h3>My posts</h3>	
			<div className={ cls.form }>
				<textarea></textarea>
				<br />
				<button>Send</button>
			</div>
			<div className={ cls.posts }>
				<ul className={ cls.list }>
					{ postElements }
				</ul>
			</div>
		</div>
	);
}

export default MyPosts;