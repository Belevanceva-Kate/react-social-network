import { Field } from 'redux-form';
import cls from './MessageForm.module.css';

const MessageForm = (props) => {
    return (
        <div className={ cls.form }>
            <form onSubmit={ props.handleSubmit }>
                <Field
                    component={ 'textarea' }
                    name={ 'message' }
                    rows='4'
                    placeholder='Add new message'
                />
                <br />
                <button>Send</button>
            </form>
        </div>
    );
}

export default MessageForm;