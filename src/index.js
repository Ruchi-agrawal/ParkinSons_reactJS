import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
render((
<BrowserRouter basename="/">
   <App />
</BrowserRouter>
), document.getElementById('root'));
serviceWorker.unregister();
