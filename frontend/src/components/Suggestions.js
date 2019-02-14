import React from "react";

export const Suggestions = (props) => {
    const words = props.words.map((word, index) => {
        return <li key={index}>{word}</li>;
    });
    return (
        <ul>
            {words}
        </ul>
    );
};