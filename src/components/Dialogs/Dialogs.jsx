import Chat from './Chat/Chat';
import Message from './Message/Message';
import cls from './Dialogs.module.css';

const Dialogs = (props) => {

	let dialogElements = props.state.dialogs.map((el, i) => <Chat name={ el.name } id={ el.id } key={ i.toString() } />);

	let messageElements = props.state.messages.map((el, i) => <Message message={ el.message } key={ i.toString() } isMine={ Math.round(Math.random()) } />);

	return (
		<div className={ cls.dialogs }>
			<div className={ cls.chats }>
				{ dialogElements }
			</div>
			<div className={ cls.messages }>
				{ messageElements }
			</div>
		</div>
	)
}

export default Dialogs;