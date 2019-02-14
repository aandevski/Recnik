import React from "react";
import { RecnikWord } from "../components/RecnikWord";
import {Repository} from "../repository/repository";
import {SearchContainer} from "./SearchContainer";

export class RecnikContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWord: null,
            related: []
        };
        this.selectWord = this.selectWord.bind(this);
    }

    componentDidMount() {
        if(this.props.match.params.word) {
            this.selectWord(this.props.match.params.word);
        }
    }

    selectWord(word) {
        Repository.getWord(word).then(d => {
            this.setState({
                currentWord: d.word,
                related: d.related
            })
        })
    }

    render() {
        return (this.state.currentWord)?<RecnikWord word={this.state.currentWord} related={this.state.related} />:<SearchContainer selectWord={this.selectWord}/>;
    }


};
