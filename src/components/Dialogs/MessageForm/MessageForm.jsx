import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls';
import { maxLength, required } from '../../../utils/validators/validators';
import cls from './MessageForm.module.css';

const MessageForm = (props) => {
    return (
        <div className={ cls.form }>
            <form onSubmit={ props.handleSubmit }>
                <Field
                    component={ Textarea }
                    name={ 'message' }
                    rows='4'
                    placeholder='Add new message'
                    validate={[ required, maxLength150 ]}
                />
                <br />
                <button>Send</button>
            </form>
        </div>
    );
}

const maxLength150 = maxLength(150);

export default reduxForm({
    form: 'message'
})(MessageForm);