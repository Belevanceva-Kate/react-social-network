import Friend from './Friend/Friend';
import cls from './Friends.module.css';

const Friends = (props) => {
	
	// let friendElements = props.store.friends.map((el, i) => 
	// 	<Friend name={ el.name } img={ el.img } key={ i.toString() } />);
	let friendElements = props.friends.map((el, i) => 
		<Friend name={ el.name } img={ el.img } key={ i.toString() } />);

	return (
		<div className={ cls.friends }>
			<div className={ cls.title }>Friends</div>
			<div className={ cls.friendsBlock }>
				{ friendElements }
			</div>
		</div>
	);
}

export default Friends;