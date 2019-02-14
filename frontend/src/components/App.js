import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { HomePage } from "../pages/HomePage";
import { Footer } from "./Footer";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import {RecnikPage} from "../pages/RecnikPage";
import {CalculatorContainer} from "../containers/CalculatorContainer";

const App = () => (
    <BrowserRouter>
        <div id="main">
            <div className="container" id="topPart">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/recnik/:word?" component={RecnikPage} />
                    <Route exact path="/calculator" component={CalculatorContainer} />
                </Switch>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App/>, wrapper) : null;