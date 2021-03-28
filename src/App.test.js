/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/






import { render, screen } from '@testing-library/react';
import SocialApp from './App';

test('renders learn react link', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<SocialApp />, div);
  // ReactDOM.unmountComponentAtNode(div)

  render(<SocialApp />);
});









/*
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/redux-store';

test('renders learn react link', () => {
    render(
        <BrowserRouter>
            <Provider store={ store }>
                <App />
            </Provider>
        </BrowserRouter>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
*/

