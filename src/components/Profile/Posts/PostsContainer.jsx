import { connect } from 'react-redux';
import Posts from './Posts';
import { actionCreatorAddPost } from '../../../redux/reducers/profile';

const mapStateToProps = (state) => {
	return {
		posts: state.profile.posts,
		newPostContent: state.profile.newPostContent,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (post) => {
			dispatch(actionCreatorAddPost(post));
		}
	};
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;