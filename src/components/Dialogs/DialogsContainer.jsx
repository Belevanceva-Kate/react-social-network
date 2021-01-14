import Dialogs from './Dialogs';
import { actionCreatorAddMessage, actionCreatorUpdateNewMessageContent } from '../../redux/reducers/dialogs';

const DialogsContainer = (props) => {

	let state = props.store.getState();

	let addMessage = () => {
		props.store.dispatch(actionCreatorAddMessage());
	}

	let updateMessageContent = (text) => {
		props.store.dispatch(actionCreatorUpdateNewMessageContent(text));
	}

	return (
		<Dialogs
			dialogs={ state.dialogs }
			addMessage={ addMessage }
			updateMessageContent={ updateMessageContent }
		/>
	);
}

export default DialogsContainer;