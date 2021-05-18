import cls from './Data.module.css';
import Contact from '../Contact/Contact';

const Data = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div className={ cls.data }>
            { isOwner && <button onClick={ goToEditMode }>Edit</button> }

            <div><b>Full name:</b> { profile.fullName }</div>
            <div><b>Looking for a job:</b> { profile.lookingForAJob ? 'yes' : 'no' }</div>
            { profile.lookingForAJob && <p><b>My professional skills :</b> { profile.lookingForAJobDescription }</p> }
            <div><b>About me:</b> { profile.aboutMe }</div>
            <div><b>Contacts:</b> { Object.keys(profile.contacts).map(key => {
                return <Contact key={ key } contactTitle={ key } contactValue={ profile.contacts[key] } />
            }) }</div>
        </div>
    );
}

export default Data;