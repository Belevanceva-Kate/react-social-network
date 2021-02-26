import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import { actionCreatorAddMessage } from '../../redux/reducers/dialogs';

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogs
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (message) => {
			dispatch(actionCreatorAddMessage(message));
		},
	};
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	// withAuthRedirect
)(Dialogs);