import React from "react";
import { Search } from "../components/Search";
import {SuggestionsContainer} from "./SuggestionsContainer";

export class SearchContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchField: ''
        };
        this.searchTextChange = this.searchTextChange.bind(this);
    }

    searchTextChange(e) {
        this.setState({
            searchField: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Search inputText={this.state.searchField} inputChangeFunction={this.searchTextChange} />
                <SuggestionsContainer query={this.state.searchField}/>
            </div>
        );
    }


};
