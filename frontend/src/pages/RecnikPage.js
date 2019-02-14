import React from "react";
import { RecnikContainer } from "../containers/RecnikContainer";

export const RecnikPage = (props) => (
    <div className="row">
        <RecnikContainer word={props.match.params.word}/>
    </div>
);