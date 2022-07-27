import React from 'react';
import {Container} from "reactstrap";

import Header from "./components/header/Header";


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import navigation from "./middleware/navigation";

const App = () => {
    return (
        <div>
            <Container>
                <Router>
                    <Header />

                    <main>
                        <Switch>
                            {
                                navigation.routes.map((route) => {
                                    return (
                                        <Route path={route.path} key={route.path}>
                                            { route.component }
                                        </Route>
                                    )
                                })
                            }
                        </Switch>
                    </main>
                </Router>
            </Container>
        </div>
    )
}

export default App;
