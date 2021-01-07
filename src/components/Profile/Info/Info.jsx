import cls from './Info.module.css';

const Info = () => {
	return (
		<div className={ cls.info }>
			<div className={ cls.cover }>
				<img 
					src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' 
					alt='banner'
				/>
			</div>
			<div className={ cls.description }>
				ava + description
				{/*<div className='avatar'>
					<img 
						src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' 
						alt='avatar'
					/>
				</div>*/}
			</div>
		</div>
	);
}

export default Info;
