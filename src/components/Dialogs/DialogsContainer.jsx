import Dialogs from './Dialogs';
import { actionCreatorAddMessage, actionCreatorUpdateNewMessageContent } from '../../redux/reducers/dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

	/*let state = props.store.getState();

	let addMessage = () => {
		props.store.dispatch(actionCreatorAddMessage());
	}

	let updateMessageContent = (text) => {
		props.store.dispatch(actionCreatorUpdateNewMessageContent(text));
	}*/

	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState();

				let addMessage = () => {
					store.dispatch(actionCreatorAddMessage());
				}

				let updateMessageContent = (text) => {
					store.dispatch(actionCreatorUpdateNewMessageContent(text));
				}

				return (
					<Dialogs
						dialogs={ state.dialogs }
						addMessage={ addMessage }
						updateMessageContent={ updateMessageContent }
					/>
				);
			}}
		</StoreContext.Consumer>

		/*<Dialogs
			dialogs={ state.dialogs }
			addMessage={ addMessage }
			updateMessageContent={ updateMessageContent }
		/>*/
	);
}

export default DialogsContainer;