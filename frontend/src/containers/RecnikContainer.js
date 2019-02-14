import React from "react";
import { RecnikSearch } from "../components/RecnikSearch";
import { RecnikWord } from "../components/RecnikWord";

export class RecnikContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWord: null
        };
    }

    render() {
        return (this.state.currentWord)?<RecnikWord word={this.state.currentWord} />:<RecnikSearch/>;
    }


};
