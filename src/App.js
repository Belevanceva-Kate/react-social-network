import React from 'react';
import { Component } from 'react';
import { Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
// import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {connect, Provider} from 'react-redux';
import { initApp } from './redux/reducers/app';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import './App.css';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

// class App extends React.Component {
class App extends Component {

	// catchAllUnhandledErrors = (promiseRejectionEvent) => {
	catchAllUnhandledErrors = (reason, promise) => {
		// alert(promiseRejectionEvent);
		alert('some error occured');
	}

	componentDidMount() {
		this.props.initApp();

		// side effect
		window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
	}

	componentWillUnmount() {
		// при умирании компоненты убираем мусор и отписываемся от события
		window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
	}

	render() {
		if (!this.props.init) {
			return <Preloader />
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer/>
				<Navbar/>
				<main className='app-wrapper-content'>
					{/*<Route path='/profile/:id?' render={() => <ProfileContainer/>}/>*/}
					{/*<Route path='/dialogs' render={() => <DialogsContainer/>}/>*/}
					<Switch>
						<Route exact path='/' render={ () => <Redirect to={ '/profile' } /> } />
						<Route path='/profile/:id?' render={ withSuspense(ProfileContainer) } />
						<Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
						<Route path='/news' component={News}/>
						<Route path='/music' component={Music}/>
						<Route path='/users' component={UsersContainer}/>
						<Route path='/settings' component={Settings}/>
						<Route path='/login' component={Login}/>
						<Route path='/*' render={ () => <div>404 NOT FOUND</div> } />
					</Switch>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	init: state.app.init
})

// export default compose(
// 	connect(mapStateToProps, { initApp }),
// 	withRouter
// )(App);





/*const SocialApp = (props) => {
	return (
		<BrowserRouter basename={ process.env.PUBLIC_URL }>
			<Provider store={ store }>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
}*/




let AppContainer = compose(
	connect(mapStateToProps, { initApp }),
	withRouter
)(App);

const SocialApp = (props) => {
	return (
		<HashRouter>
			<Provider store={ store }>
				<AppContainer />
			</Provider>
		</HashRouter>
	);
}

export default SocialApp;
