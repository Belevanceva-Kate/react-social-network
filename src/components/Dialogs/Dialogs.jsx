import { NavLink } from 'react-router-dom';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import cls from './Dialogs.module.css';

const Dialogs = (props) => {

	let dialogElements = props.dialogs.map((el, i) => <Chat name={ el.name } id={ el.id } />);

	let messageElements = props.messages.map((el, i) => <Message message={ el.message } />);

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