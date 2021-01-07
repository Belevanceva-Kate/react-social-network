import { NavLink } from 'react-router-dom';
import cls from './Chat.module.css';

const Chat = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div className={ cls.chat + ' ' + cls.active }>
			<NavLink to={ path }>{ props.name }</NavLink>
		</div>
	);
}

export default Chat;
