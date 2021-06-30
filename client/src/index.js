import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {state, store} from "./redux/store";


ReactDOM.render(<App state={state} />, document.getElementById('root'));
registerServiceWorker();
