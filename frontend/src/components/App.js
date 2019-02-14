import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";

const App = () => (
    <div id="main">
        <div className="container" id="topPart">
            <Header />
            <MainContent />
        </div>
        <Footer />
    </div>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App/>, wrapper) : null;