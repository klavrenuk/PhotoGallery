import React from 'react';

import Demo from './components/demo/Demo';
import Dashboard from "./views/Dashboard";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={'/demo'}><Demo /></Route>
                    <Route path={'/'}>
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
