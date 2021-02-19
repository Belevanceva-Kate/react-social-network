import { Redirect } from 'react-router';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import cls from './Dialogs.module.css';

const Dialogs = (props) => {

	let dialogElements = props.dialogs.dialogs.map((el, i) =>
		<Chat
			name={ el.name }
			id={ el.id }
			// key={ i.toString() }
			key={ el.id }
		/>
	);

	let messageElements = props.dialogs.messages.map((el, i) =>
		<Message
			message={ el.message }
			key={ el.id }
			// key={ i.toString() }
			isMine={ Math.round(Math.random()) }
		/>
	);

	let addMessage = () => {
		props.addMessage();
	}

	let updateMessageContent = (e) => {
		let text = e.target.value;
		props.updateMessageContent(text);
	}

	if (!props.isAuth) return <Redirect to={ '/login' } />

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
						value={ props.dialogs.newMessageContent }
					/>
					<br />
					<button onClick={ addMessage }>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;