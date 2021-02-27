import Chat from './Chat/Chat';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';
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

	const onFormSubmit = (values) => {
		props.addMessage(values.message);
	}

	return (
		<div className={ cls.dialogs }>
			<div className={ cls.chats }>
				{ dialogElements }
			</div>
			<div className={ cls.content }>
				<div className={ cls.messages }>
					{ messageElements }
				</div>
				<MessageForm onSubmit={ onFormSubmit } />
			</div>
		</div>
	)
}

export default Dialogs;