import { Field } from 'redux-form';
import cls from './LoginForm.module.css';

const LoginForm = (props) => {
    return (
        <div className={ cls.login }>
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field
                        component={ 'input' }
                        name={ 'login' }
                        placeholder='Login' />
                </div>
                <div>
                    <Field
                        component={ 'input' }
                        name={ 'password' }
                        placeholder={ 'Password' } />
                </div>
                <div>
                    <Field
                        component={ 'input' }
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

export default LoginForm;