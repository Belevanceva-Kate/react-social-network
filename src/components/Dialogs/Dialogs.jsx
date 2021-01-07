import { NavLink } from 'react-router-dom';
// import Chat from './Chat/Chat';
// import Message from './Message/Message';
import cls from './Dialogs.module.css';

const Chat = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div className={ cls.chat + ' ' + cls.active }>
			<NavLink to={ path }>{ props.name }</NavLink>
		</div>
	);
}

const Message = (props) => {
	return (
		<div className={ cls.message }>
			{ props.message }
		</div>
	);
}

const Dialogs = () => {

	let dialogs = [
		{ id: 1, name: 'Dima' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Valera' },
	];

	let messages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'How is your day?' },
		{ id: 4, message: 'Yo' },
	];

	let dialogElements = dialogs.map((el, i) => <Chat name={ el.name } id={ el.id } />);

	let messageElements = messages.map((el, i) => <Message message={ el.message } />);

	// let dialogElements = [
	// 	<Chat name={ dialogs[0].name } id={ dialogs[0].id } />,
	// 	<Chat name={ dialogs[1].name } id={ dialogs[1].id } />,
	// ];

	// let messageElements = [
	// 	<Message message={ messages[0].message } />,
	// 	<Message message={ messages[1].message } />,
	// ];


	return (
		<div className={ cls.dialogs }>
			<div className={ cls.chats }>
				
				{ dialogElements }

{/*				<div className={ cls.chat + ' ' + cls.active }>
					<NavLink to='/dialogs/1'>Dima</NavLink>
				</div>
*/}
			</div>
			<div className={ cls.messages }>
				{ messageElements }
			</div>
		</div>
	)
}

export default Dialogs;