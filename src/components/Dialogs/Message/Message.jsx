import cls from './Message.module.css';

const Message = (props) => {
	
	let whoseMssage = props.isMine ? cls.mine : cls.yours;

	return (
		<div className={ cls.message + ' ' + whoseMssage }>
			<div className={ cls.content + ' ' + whoseMssage }>
				{ props.message }
			</div>
		</div>
	);
}

export default Message;
