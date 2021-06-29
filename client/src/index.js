import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import state from "./redux/state";

ReactDOM.render(<App state={state} />, document.getElementById('root'));
registerServiceWorker();
