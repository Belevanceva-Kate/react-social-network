import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../../common/FormControls/FormControls';
import clsForm from '../../../common/FormControls/FormControls.module.css';
// import Contact from '../Contact/Contact';
import cls from './DataForm.module.css';

const DataForm = ({ profile, handleSubmit, error }) => {
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <button>Save</button>

                { error && <div className={ clsForm.summaryError }>{ error }</div> }

                <div><b>Full name:</b>
                    { createField('fullName', 'Full name', [], Input) }</div>
                <div><b>Looking for a job:</b>
                    { createField('lookingForAJob', '', [], Input, { type: 'checkbox' }) }</div>
                <div><b>My professional skills:</b>
                    { createField('lookingForAJobDescription', 'My professional skills', [], Textarea) }</div>
                <div><b>About me:</b>
                    { createField('aboutMe', 'About mes', [], Textarea) }</div>
                <div><b>Contacts:</b> { Object.keys(profile.contacts).map(key => {
                    return (
                        <div className={ cls.contact } key={ key }>
                            <b>{ key }:</b> { createField('contacts.' + key, key, [], Input) }
                        </div>
                    );
                }) }</div>
            </form>
        </div>
    );
}

export default reduxForm({ form: 'edit-profile' })(DataForm);