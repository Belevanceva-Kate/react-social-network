import Posts from './Posts';
import { actionCreatorAddPost, actionCreatorUpdateNewPostContent } from '../../../redux/reducers/profile';

const PostsContainer = (props) => {
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(actionCreatorAddPost());
	};

	let updatePostContent = (text) => {
		props.store.dispatch(actionCreatorUpdateNewPostContent(text));
	};

	return (
		<Posts
			posts={ state.profile.posts }
			newPostContent={ state.profile.newPostContent }
			addPost={ addPost }
			updateNewPostText={ updatePostContent }
		/>
	);
}

export default PostsContainer;