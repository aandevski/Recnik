import React from "react";
import { Repository } from "../repository/repository";
import { Suggestions } from "../components/Suggestions";

export class SuggestionsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            words: []
        };
        this.loadWords = this.loadWords.bind(this);
    }

    loadWords() {
        Repository.getWords(this.props.query).then(d => {
            this.setState({
                words: d
            });
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.query !== this.props.query) {
            this.loadWords();
        }
    }

    render() {
        return (this.state.words)?<Suggestions selectWord={this.props.selectWord} words={this.state.words} />:'';
    }


};
