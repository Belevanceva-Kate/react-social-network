import React from 'react';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import cls from './Dialogs.module.css';

const Dialogs = (props) => {

	let dialogElements = props.state.dialogs.map((el, i) => 
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
			addMessage={ props.addMessage }
			updateNewMessageContent={ props.updateNewMessageContent }
		/>
	);

	let newMessageElement = React.createRef();

	let addMessage = () => {
		let text = newMessageElement.current.value;
		console.log(text);
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
				<div className={ cls.form }>
					<textarea ref={ newMessageElement } rows={ 4 }></textarea>
					<br />
					<button onClick={ addMessage }>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;