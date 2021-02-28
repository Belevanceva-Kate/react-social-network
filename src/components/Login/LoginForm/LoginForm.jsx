import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormControls/FormControls';
import { required } from '../../../utils/validators/validators';
import cls from './LoginForm.module.css';
import clsForm from '../../common/FormControls/FormControls.module.css';

const LoginForm = (props) => {
    return (
        <div className={ cls.login }>
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field
                        component={ Input }
                        name={ 'email' }
                        placeholder='Email'
                        validate={[ required ]} />
                </div>
                <div>
                    <Field
                        component={ Input }
                        name={ 'password' }
                        placeholder={ 'Password' }
                        type='password'
                        validate={[ required ]} />
                </div>
                <div>
                    <Field
                        component={ Input }
                        name={ 'rememberMe' }
                        type={ 'checkbox' } /> remember me
                </div>
                { props.error && <div className={clsForm.summaryError}>{ props.error }</div> }
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