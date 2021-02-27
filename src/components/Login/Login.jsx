import LoginForm from './LoginForm/LoginForm';
import cls from './Login.module.css';

const Login = (props) => {
    const onFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className={ cls.login }>
            <h1>Login</h1>
            <LoginForm onSubmit={ onFormSubmit } />
        </div>
    );
}

export default Login;