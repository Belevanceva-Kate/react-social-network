import { connect } from 'react-redux';
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;