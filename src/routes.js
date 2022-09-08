import React from 'react';
import './routes.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import NavBar from './components/navBar/navBar';
// import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
// import { Products } from "./components/Pages/Products";
import { Contact } from "./components/Pages/Contact";
import { SpinWheel } from "./components/Pages/spinWheel";

export default function Routes() {
    return (
        <Router>
            <NavBar />
            <div className="pages">
                <Switch>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <About />
                            {/* <Services /> */}
                            {/* <Home /> */}
                            {/* <Products />*/}
                            {/* <ContactForm /> */}
                            <Contact />
                            {/* <SpinWheel /> */}

                        </React.Fragment>
                    )} />
                </Switch>
            </div>
        </Router>
    )
}