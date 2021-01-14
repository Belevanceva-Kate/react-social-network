import Posts from './Posts';
import { actionCreatorAddPost, actionCreatorUpdateNewPostContent } from '../../../redux/reducers/profile';
import StoreContext from '../../../StoreContext';

const PostsContainer = (props) => {
	/*let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(actionCreatorAddPost());
	};

	let updatePostContent = (text) => {
		props.store.dispatch(actionCreatorUpdateNewPostContent(text));
	};*/

	return (
		<StoreContext.Consumer>
			{(store) => {
				// let state = store.getState();
				let state = store.getState();

				let addPost = () => {
					store.dispatch(actionCreatorAddPost());
				};

				let updatePostContent = (text) => {
					store.dispatch(actionCreatorUpdateNewPostContent(text));
				};

				return (
					<Posts
						posts={ state.profile.posts }
						newPostContent={ state.profile.newPostContent }
						addPost={ addPost }
						updateNewPostText={ updatePostContent }
					/>
				)
			}}
		</StoreContext.Consumer>
		/*<Posts
			posts={ state.profile.posts }
			newPostContent={ state.profile.newPostContent }
			addPost={ addPost }
			updateNewPostText={ updatePostContent }
		/>*/
	);
}

export default PostsContainer;