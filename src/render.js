import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostContent, addMessage, updateNewMessageContent } from './redux/state';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App 
					state={ state } 
					addPost={ addPost } 
					updateNewPostContent={ updateNewPostContent } 
					addMessage={ addMessage }
					updateNewMessageContent={ updateNewMessageContent }
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}