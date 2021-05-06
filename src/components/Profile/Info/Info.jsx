import { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Status from './Status/Status';
import Data from './Data/Data';
import DataForm from './DataForm/DataForm';
import cls from './Info.module.css';
import avatar from '../../../assets/images/user.png';

// import socialFacebook from '../../../assets/images/socials/facebook.svg';
// import socialTwitter from '../../../assets/images/socials/twitter.svg';
// import socialVk from '../../../assets/images/socials/vk.svg';
// import facebook from '../../../assets/images/socials/facebook.svg';
// import twitter from '../../../assets/images/socials/twitter.svg';
// import vk from '../../../assets/images/socials/vk.svg';

const Info = (props) => {

	let [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />
	}

	/*let socials = ['facebook', 'twitter', 'vk', 'github'];
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
	}*/

	const onAvatarSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}

	const handleSubmit = (formData) => {
		props.saveProfile(formData)
			.then(() => {
				setEditMode(false);
			});
	}

	return (
		<div className={ cls.info }>
			<div className={ cls.content }>
				<div className={ cls.picture }>
					<div className={ cls.avatar }>
						<img src={ props.profile.photos.large || avatar } alt='avatar' />
						{ props.isOwner && <input type='file' onChange={ onAvatarSelected } /> }
					</div>
				</div>
				<div className={ cls.description } >
					<div className={ cls.name }>{ props.profile.fullName }</div>
					<Status status={ props.status } updateStatus={ props.updateStatus } />
					{
						editMode
							? <DataForm initialValues={ props.profile } onSubmit={ handleSubmit } profile={ props.profile } />
							: <Data profile={ props.profile } isOwner={ props.isOwner } goToEditMode={ () => { setEditMode(true) } } />
					}
					{/*{*/}
					{/*	socialsElements.length > 0*/}
					{/*		? <div className={ cls.socials }>*/}
					{/*			<ul className={ cls.socials__list }>*/}
					{/*				{ socialsElements }*/}
					{/*			</ul>*/}
					{/*		</div>*/}
					{/*		: null*/}
					{/*}*/}
				</div>
			</div>
		</div>
	);
}

export default Info;
