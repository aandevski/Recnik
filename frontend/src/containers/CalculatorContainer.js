import React from "react";
import {Calculator} from "../components/Calculator";
import {Repository} from "../repository/repository";

export class CalculatorContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            positiveFields: [],
            negativeFields: [],
            results: []
        };
        this.addPositive = this.addPositive.bind(this);
        this.addNegative = this.addNegative.bind(this);
        this.editPositive = this.editPositive.bind(this);
        this.editNegative = this.editNegative.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    addPositive(){
        this.setState((prevState, props) => ({
            positiveFields: [...prevState.positiveFields, '']
        }));
    }

    addNegative() {
        this.setState((prevState, props) => ({
            negativeFields: [...prevState.negativeFields, '']
        }));
    }

    editPositive(e) {
        e.persist();
        this.setState((prevState, props) => ({
            positiveFields: prevState.positiveFields.map((f, idx) => {
                if(idx !== parseInt(e.target.dataset.id)) return f;
                else return e.target.value;
            })
        }));
    }

    editNegative(e) {
        e.persist();
        this.setState((prevState, props) => ({
            negativeFields: prevState.negativeFields.map((f, idx) => {
                if(idx !== parseInt(e.target.dataset.id)) return f;
                else return e.target.value;
            })
        }));
    }

    calculate() {
        Repository.getCalculation(this.state.positiveFields, this.state.negativeFields).then(d => {
            this.setState((prevState, props) => ({
                results: d
            }));
        });
    }

    render() {
        return (
            <Calculator positives={this.state.positiveFields} negatives={this.state.negativeFields} results={this.state.results}
                        addPositive={this.addPositive} addNegative={this.addNegative} editPositive={this.editPositive}
                        editNegative={this.editNegative} calculate={this.calculate}/>
        );
    }


};
