import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			{/*<Navbar state={ props.state.sidebar } />*/}
			<main className='app-wrapper-content'>
				<Route
					path='/profile'
					render={ () =>
						<Profile />
					}
				/>
				{/*<Profile store={ props.store } />*/}
				{/*<Profile
					state={ props.state.profile }
					dispatch={ props.dispatch }
				/>*/}
				<Route
					path='/dialogs'
					render={ () => <DialogsContainer /> }
				/>
				{/*<DialogsContainer store={ props.store } />*/}
				{/*<Dialogs
					state={ props.state.dialogs }
					dispatch={ props.dispatch }
				/>*/}
				<Route path='/news' component={ News } />
				<Route path='/music' component={ Music } />
				<Route path='/settings' component={ Settings } />
			</main>
		</div>
	);
}

export default App;
