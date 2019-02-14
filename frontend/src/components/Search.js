import React from "react";

export const Search = (props) => (
    <input type="text" value={props.inputText} onChange={props.inputChangeFunction}/>
);