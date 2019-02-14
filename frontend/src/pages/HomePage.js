import React from "react";
import ReactDOM from "react-dom";
import {RecnikContainer} from "../containers/RecnikContainer";
import {CalculatorContainer} from "../containers/CalculatorContainer";

export const HomePage = () => (
    <div className="row">
        <div className="halfColumn">
            <RecnikContainer/>
        </div>
        <div className="halfColumn">
            <CalculatorContainer/>
        </div>
    </div>
);