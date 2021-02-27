import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import cls from './Posts.module.css';

const Posts = (props) => {

	let postElements = props.posts.map((el, i) => {
		return <Post message={ el.message } likesCount={ el.likesCount } key={ i.toString() } />
	});

	const onFormSubmit = (values) => {
		props.addPost(values.post);
	}

	return (
		<div className={ cls.postsBlock }>
			<h3>My posts</h3>
			<PostForm onSubmit={ onFormSubmit } />
			<div className={ cls.posts }>
				<ul className={ cls.list }>
					{ postElements }
				</ul>
			</div>
		</div>
	);
}

export default Posts;