import React from "react";
import ReactDOM from "react-dom";
import {RecnikContainer} from "../containers/RecnikContainer";

export const HomePage = () => (
    <div className="row">
        <div className="halfColumn">
            <RecnikContainer/>
        </div>
        <div className="halfColumn">
            Cb
        </div>
    </div>
);