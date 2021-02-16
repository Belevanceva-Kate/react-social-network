import cls from './Info.module.css';
import Preloader from '../../common/Preloader/Preloader';
import avatar from '../../../assets/images/user.png';

// import socialFacebook from '../../../assets/images/socials/facebook.svg';
// import socialTwitter from '../../../assets/images/socials/twitter.svg';
// import socialVk from '../../../assets/images/socials/vk.svg';
// import facebook from '../../../assets/images/socials/facebook.svg';
// import twitter from '../../../assets/images/socials/twitter.svg';
// import vk from '../../../assets/images/socials/vk.svg';

const Info = (props) => {

	if (!props.profile) {
		return <Preloader />
	}


	let socials = ['facebook', 'twitter', 'vk', 'github'];
	let socialsElements = [];

	for (let [key, value] of Object.entries(props.profile.contacts)) {
		if (value && socials.includes(key)) {
			socialsElements.push(
				<li className={ cls.socials__item } key={ key }>
					<a
						href={ value }
						target='_blank'
						rel='noopener noreferrer'
						className={ cls.socials__link }>
						<img
							src={ (require(`../../../assets/images/socials/${key}.svg`)).default }
							alt={ key }
						/>
					</a>
				</li>
			);
		}
	}

	return (
		<div className={ cls.info }>
			<div className={ cls.cover }>
				<img 
					src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' 
					alt='banner'
				/>
			</div>
			<div className={ cls.content }>
				<div className={ cls.avatar }>
					{
						props.profile.photos.large
							? <img src={ props.profile.photos.large } alt='avatar' />
							: <img src={ avatar } alt='avatar' />
					}
				</div>
				<div className={ cls.description } >
					<div className={ cls.name }>{ props.profile.fullName }</div>
					{
						props.profile.aboutMe
						? <div className={ cls.about }>{ props.profile.aboutMe }</div>
						: null
					}
					{
						socialsElements.length > 0
							? <div className={ cls.socials }>
								<ul className={ cls.socials__list }>
									{ socialsElements }
								</ul>
							</div>
							: null
					}
				</div>
			</div>
		</div>
	);
}

export default Info;
