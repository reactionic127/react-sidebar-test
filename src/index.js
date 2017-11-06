import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App';
import registerServiceWorker from "./registerServiceWorker";
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
