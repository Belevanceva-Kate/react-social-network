import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<main className='app-wrapper-content'>
					{/*<Route exact path='/profile' component={ Profile } />*/}
					{/*<Route path='/profile' component={ Profile } />*/}
					<Route path='/profile' render={ () =>  <Profile posts={ props.posts } /> } />
					<Route path='/dialogs' render={ () =>  <Dialogs dialogs={ props.dialogs } messages={ props.messages } /> } />
					<Route path='/news' component={ News } />
					<Route path='/music' component={ Music } />
					<Route path='/settings' component={ Settings } />
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
