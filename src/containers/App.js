import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import configureStore from '../store'
import Main from './Main';
import Landing from './Landing';
import '../styles/App.css';

const store = configureStore();
const history = createHistory();

class App extends Component {
    render() {
        return (
            <Provider store={store} key="provider">
                <Router history={history}>
                    <Main>
                        <Route exact path="/" component={Landing}/>
                    </Main>
                </Router>
            </Provider>
        );
    }
}

export default App;
