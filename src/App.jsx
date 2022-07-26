import React from 'react';
import {Container} from "reactstrap";

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
            <Container>
                <Router>
                    <Switch>
                        <Route path={'/demo'}><Demo /></Route>
                        <Route path={'/'}>
                            <Dashboard />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </div>
    )
}

export default App;
