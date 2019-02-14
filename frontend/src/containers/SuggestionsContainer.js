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
            console.log(d);
            this.setState({
                words: d
            });
        });
    }

    componentDidMount() {
        this.loadWords();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.query !== this.props.query) {
            this.loadWords();
        }
    }

    render() {
        return (this.state.words)?<Suggestions words={this.state.words} />:'';
    }


};
