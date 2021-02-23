import LoginForm from './LoginForm/LoginForm';
import { reduxForm } from 'redux-form';
import cls from './Login.module.css';

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {

    }

    return (
        <div className={ cls.login }>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit } />
        </div>
    );
}

export default Login;