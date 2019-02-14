import React from "react";

export const Search = (props) => (
    <div>
        Пребарајте збор:
        <input type="text" value={props.inputText} onChange={props.inputChangeFunction}/>
    </div>
);