import Post from './Post/Post';
import cls from './Posts.module.css';

const Posts = (props) => {

	let postElements = props.posts.map((el, i) => {
		return <Post message={ el.message } likesCount={ el.likesCount } key={ i.toString() } />
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

export default Posts;