import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import configureStore from '../store'
import Main from './Main';
import Dashboard from './Dashboard';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import ProjectData from './ProjectData';
import ProjectSegment from './ProjectSegment';
import ProjectList from './ProjectList';
import ProjectSettings from './ProjectSettings';
import Logout from './Logout';
import '../styles/App.css';

const store = configureStore();
const history = createHistory();

class App extends Component {
    render() {
        return (
            <Provider store={store} key="provider">
                <Router history={history}>
                    <Main>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/logout" component={Logout}/>
                        <Route exact path="/projects/:id" component={ProjectDetail}/>
                        <Route exact path="/projects/:id/data" component={ProjectData}/>
                        <Route exact path="/projects/:id/segments" component={ProjectSegment}/>
                        <Route exact path="/projects/:id/lists" component={ProjectList}/>
                        <Route exact path="/projects/:id/settings" component={ProjectSettings}/>
                    </Main>
                </Router>
            </Provider>
        );
    }
}

export default App;
