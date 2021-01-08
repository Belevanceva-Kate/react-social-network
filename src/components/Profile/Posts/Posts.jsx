import React from 'react';
import Post from './Post/Post';
import cls from './Posts.module.css';

const Posts = (props) => {

	let postElements = props.posts.map((el, i) => {
		return <Post message={ el.message } likesCount={ el.likesCount } key={ i.toString() } />
	});

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	};

	let updatePostContent = () => {
		var text = newPostElement.current.value;
		props.updateNewPostContent(text);
	};

	return (
		<div className={ cls.postsBlock }>
			<h3>My posts</h3>	
			<div className={ cls.form }>
				<textarea 
					ref={ newPostElement } 
					rows={ 4 } 
					onChange={ updatePostContent } 
					value={ props.newPostContent } 
				/>
				<br />
				<button onClick={ addPost }>Add post</button>
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