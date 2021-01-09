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
		/>
	);

	let newMessageElement = React.createRef();

	let addMessage = () => {
		props.addMessage();
	}

	let updatePostContent = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageContent(text);
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
					<textarea 
						ref={ newMessageElement } 
						rows={ 4 } 
						onChange={ updatePostContent } 
						value={ props.state.newMessageContent }
					/>
					<br />
					<button onClick={ addMessage }>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;