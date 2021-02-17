import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import './App.css';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />
			<main className='app-wrapper-content'>
				<Route path='/profile/:id?' render={ () => <ProfileContainer /> } />
				<Route path='/dialogs' render={ () => <DialogsContainer /> } />
				<Route path='/news' component={ News } />
				<Route path='/music' component={ Music } />
				<Route path='/users' component={ UsersContainer } />
				<Route path='/settings' component={ Settings } />
			</main>
		</div>
	);
}

export default App;
