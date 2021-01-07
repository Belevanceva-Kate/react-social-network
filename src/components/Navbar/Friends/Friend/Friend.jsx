import cls from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={ cls.friend }>
			<div className={ cls.image }>
				<img src={ props.img } alt='' />
			</div>
			<div className={ cls.name }>{ props.name }</div>
		</div>
	);
}

export default Friend;