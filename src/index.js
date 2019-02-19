import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import './index.scss';
import App from './components/App/App';

const history = createBrowserHistory();


export default ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('root') || document.createElement('div'),
);