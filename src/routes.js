import React from 'react';
import './routes.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import NavBar from './components/navBar/navBar';
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";

export default function Routes() {
    return (
        <Router>
            <NavBar />
            <div className="pages">
                <Switch>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <About />
                            <Contact />
                        </React.Fragment>
                    )} />
                </Switch>
            </div>
        </Router>
    )
}