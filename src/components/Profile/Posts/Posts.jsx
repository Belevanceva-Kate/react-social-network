import React from 'react';
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

export default React.memo(Posts);




/*
// import { Component } from 'react';
import { PureComponent } from 'react';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import cls from './Posts.module.css';

class Posts extends PureComponent {
// class Posts extends Component {

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps !== this.props || nextState !== this.state;
	// }

	render() {

		let postElements = this.props.posts.map((el, i) => {
			return <Post message={el.message} likesCount={el.likesCount} key={i.toString()}/>
		});

		const onFormSubmit = (values) => {
			this.props.addPost(values.post);
		}

		return (
			<div className={cls.postsBlock}>
				<h3>My posts</h3>
				<PostForm onSubmit={onFormSubmit}/>
				<div className={cls.posts}>
					<ul className={cls.list}>
						{postElements}
					</ul>
				</div>
			</div>
		);
	}
}

export default Posts;*/
