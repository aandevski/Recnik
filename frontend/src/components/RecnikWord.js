import React from "react";
import { Link } from "react-router-dom";

export const RecnikWord = (props) => {
    const relatedWords = props.related.map((word, index) => {
        return <li key={index}><Link to={"/recnik/" + word}>{word}</Link></li>;
    });
    return (
        <div>
            <h1>{props.word}</h1>
            <p>Слични зборови:</p>
            <ul>
                {relatedWords}
            </ul>
        </div>
    );
};