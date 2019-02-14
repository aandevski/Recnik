import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { Footer } from "./Footer";
import { RecnikContainer } from "../containers/RecnikContainer";
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <div id="main">
            <div className="container" id="topPart">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/recnik/:word?" component={RecnikContainer} />
                </Switch>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App/>, wrapper) : null;