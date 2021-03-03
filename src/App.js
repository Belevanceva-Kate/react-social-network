// import React from 'react';
import { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initApp } from './redux/reducers/app';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import './App.css';

// class App extends React.Component {
class App extends Component {
	componentDidMount() {
		this.props.initApp();
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
					<Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
					<Route path='/dialogs' render={() => <DialogsContainer/>}/>
					<Route path='/news' component={News}/>
					<Route path='/music' component={Music}/>
					<Route path='/users' component={UsersContainer}/>
					<Route path='/settings' component={Settings}/>
					<Route path='/login' component={Login}/>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	init: state.app.init
})

export default compose(
	connect(mapStateToProps, { initApp }),
	withRouter
)(App);
