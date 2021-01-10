import Chat from './Chat/Chat';
import Message from './Message/Message';
import { actionCreatorAddMessage, actionCreatorUpdateNewMessageContent } from '../../redux/state';
import cls from './Dialogs.module.css';

const Dialogs = (props) => {

	let state = props.store.getState().dialogs;

	let dialogElements = state.dialogs.map((el, i) =>
		<Chat
			name={ el.name }
			id={ el.id }
			key={ i.toString() }
		/>
	);

	let messageElements = state.messages.map((el, i) =>
		<Message
			message={ el.message }
			key={ i.toString() }
			isMine={ Math.round(Math.random()) }
		/>
	);

	let addMessage = () => {
		props.store.dispatch(actionCreatorAddMessage());
	}

	let updateMessageContent = (e) => {
		let text = e.target.value;
		props.store.dispatch(actionCreatorUpdateNewMessageContent(text));
	}

	/*let dialogElements = props.state.dialogs.map((el, i) =>
		<Chat 
			name={ el.name } 
			id={ el.id } 
			key={ i.toString() } 
		/>
	);

	let messageElements = props.state.messages.map((el, i) => 
		<Message 
			message={ el.message } 
			key={ i.toString() } 
			isMine={ Math.round(Math.random()) }
		/>
	);

	let addMessage = () => {
		props.dispatch(actionCreatorAddMessage());
	}

	let updateMessageContent = (e) => {
		let text = e.target.value;
		props.dispatch(actionCreatorUpdateNewMessageContent(text));
	}*/

	return (
		<div className={ cls.dialogs }>
			<div className={ cls.chats }>
				{ dialogElements }
			</div>
			<div className={ cls.content }>
				<div className={ cls.messages }>
					{ messageElements }
				</div>
				<div className={ cls.form }>
					<textarea
						rows={ 4 } 
						onChange={ updateMessageContent }
						value={ state.newMessageContent }
					/>
					{/*<textarea
						rows={ 4 }
						onChange={ updateMessageContent }
						value={ props.state.newMessageContent }
					/>*/}
					<br />
					<button onClick={ addMessage }>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;