import React from "react";

export const Calculator = (props) => {

    const positives = props.positives.map((field, index) => {
        return <input style={{display: 'block'}} key={index} data-id={index} type="text" value={field} onChange={props.editPositive}/>;
    });
    const negatives = props.negatives.map((field, index) => {
        return <input style={{display: 'block'}} key={index} data-id={index} type="text" value={field} onChange={props.editNegative}/>
    });
    const results = props.results.map((result, index) => {
        return <span key={index}><b>{result.word}</b> ({result.probability.toFixed(2)}%)</span>;
    })

    return (
        <div>
            <div className="row">
                <div className="halfColumn">
                    <button style={{display: 'block'}} onClick={props.addPositive}>Add new positive</button>
                    {positives}
                </div>
                <div className="halfColumn">
                    <button style={{display: 'block'}} onClick={props.addNegative}>Add new negative</button>
                    {negatives}
                </div>
            </div>
            <div className="row">
                <button onClick={props.calculate}>Calculate!</button>
                {results}
            </div>
        </div>
    );
}