import cls from './Post.module.css';

const Post = (props) => {
	return (
		<li className={ cls.item }>
			<img 
				src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' 
				alt='avatar'
			/>
			<div>
				{ props.message }
			</div>
			<div>
				<span>like: { props.likesCount }</span>
			</div>
		</li>
	);
}

export default Post;