import React from 'react';
import {Container} from "reactstrap";

import Header from "./components/header/Header";
import PhotoCarousel from "./components/photo-carousel/PhotoCarousel";


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

                    <main className={'main'}>
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

            <PhotoCarousel />
        </div>
    )
}

export default App;
