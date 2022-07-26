import React from 'react';

import Demo from './components/demo/Demo';

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
                    <Route path={'/'}>
                        <Route path={'/demo'}><Demo /></Route>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
