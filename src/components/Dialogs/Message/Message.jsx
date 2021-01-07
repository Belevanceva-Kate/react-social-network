import cls from './Message.module.css';

const Message = (props) => {
	
	let isMine = props.isMine ? cls.mine : cls.yours;

	return (
		<div className={ cls.message }>
			<div className={ cls.content + ' ' + isMine }>
				{ props.message }
			</div>
		</div>
	);
}

export default Message;
