import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {DataProvider} from "./context";
import App from './App';
import * as serviceWorker from './serviceWorker';
let prefix = window.location.hostname.includes('shearspiremedia.com') ? "/demos/musicstore" : "/";

ReactDOM.render(
    <DataProvider>
        <Router basename={prefix}>
            <App />
        </Router>
    </DataProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
