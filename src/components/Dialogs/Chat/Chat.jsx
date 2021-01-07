import { NavLink } from 'react-router-dom';
import cls from './Chat.module.css';

const Chat = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div className={ cls.chat }>
			<NavLink 
				to={ path } 
				className={ cls.link }
				activeClassName={ cls.active }
			>{ props.name }</NavLink>
		</div>
	);
}

export default Chat;
