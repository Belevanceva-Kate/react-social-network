import { Route } from 'react-router-dom';
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
		<div className='app-wrapper'>
			<Header />
			<Navbar state={ props.state.sidebar } />
			<main className='app-wrapper-content'>
				<Route 
					path='/profile' 
					render={ () => 
						<Profile 
							state={ props.state.profile } 
							addPost={ props.addPost } 
							updateNewPostContent={ props.updateNewPostContent } 
						/> 
					}
				/>
				<Route 
					path='/dialogs' 
					render={ () => 
						<Dialogs 
							state={ props.state.dialogs } 
							addMessage={ props.addMessage }
							updateNewMessageContent={ props.updateNewMessageContent }
						/> 
					}
				/>
				<Route path='/news' component={ News } />
				<Route path='/music' component={ Music } />
				<Route path='/settings' component={ Settings } />
			</main>
		</div>
	);
}

export default App;
