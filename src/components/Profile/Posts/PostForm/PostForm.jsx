import { reduxForm, Field } from 'redux-form';
import { required, maxLength } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormControls/FormControls';
import cls from './PostForm.module.css';

const PostForm = (props) => {
    return (
        <div className={ cls.form }>
            <form onSubmit={ props.handleSubmit }>
                <Field
                    component={ Textarea }
                    name={ 'post' }
                    rows='4'
                    placeholder='Add new post'
                    validate={[ required, maxLength100 ]}
                />
                <br />
                <button>Add post</button>
            </form>
        </div>
    );
}

const maxLength100 = maxLength(100);

export default reduxForm({
    form: 'post'
})(PostForm);