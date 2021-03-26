import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../redux/reducers/auth';
import LoginForm from './LoginForm/LoginForm';
import cls from './Login.module.css';

const Login = (props) => {
// const Login = ({ login, isAuth, }) => {
    const onFormSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe);
        // login(values.email, values.password, values.rememberMe);
    }

    if (props.isAuth) {
    // if (isAuth) {
        return <Redirect to={'/profile'} />;
    }

    return (
        <div className={ cls.login }>
            <h1>Login</h1>
            <LoginForm onSubmit={ onFormSubmit } />
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);