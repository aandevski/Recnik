import React from "react";

export const RecnikWord = (props) => {
    const relatedWords = props.related.map((word, index) => {
        return <li key={index}>{word}</li>;
    });
    return (
        <div className="row">
            <h1>{props.word}</h1>
            <ul>
                {relatedWords}
            </ul>
        </div>
    )
};