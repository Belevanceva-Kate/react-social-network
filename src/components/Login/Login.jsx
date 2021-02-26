import LoginForm from './LoginForm/LoginForm';
import { reduxForm } from 'redux-form';
import cls from './Login.module.css';

const Login = (props) => {
    const onFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className={ cls.login }>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onFormSubmit } />
        </div>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default Login;