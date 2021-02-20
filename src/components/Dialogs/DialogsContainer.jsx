import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import { actionCreatorAddMessage, actionCreatorUpdateNewMessageContent } from '../../redux/reducers/dialogs';

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogs
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(actionCreatorAddMessage());
		},
		updateMessageContent: (text) => {
			dispatch(actionCreatorUpdateNewMessageContent(text));
		},
	};
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);;