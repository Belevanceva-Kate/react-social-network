import { Field } from 'redux-form';
import cls from './PostForm.module.css';

const PostForm = (props) => {
    return (
        <div className={ cls.form }>
            <form onSubmit={ props.handleSubmit }>
                <Field
                    component={ 'textarea' }
                    name={ 'post' }
                    rows='4'
                    placeholder='Add new post'
                />
                <br />
                <button>Add post</button>
            </form>
        </div>
    );
}

export default PostForm;