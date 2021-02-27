import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormControls/FormControls';
import { required } from '../../../utils/validators/validators';
import cls from './LoginForm.module.css';

const LoginForm = (props) => {
    return (
        <div className={ cls.login }>
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field
                        component={ Input }
                        name={ 'login' }
                        placeholder='Login'
                        validate={[ required ]} />
                </div>
                <div>
                    <Field
                        component={ Input }
                        name={ 'password' }
                        placeholder={ 'Password' }
                        validate={[ required ]} />
                </div>
                <div>
                    <Field
                        component={ Input }
                        name={ 'rememberMe' }
                        type={ 'checkbox' } /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm({
    form: 'login'
})(LoginForm);