import React from 'react';
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox';
import './SearchBox.css';
import ResultsContainer from './ResultsContainer';
import './ResultsContainer.css';

const names = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: 'Namehub',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({headerExpanded: !inputText, suggestedNames: inputText? names(inputText): [],});
    };

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} headExpand={this.state.headerExpanded}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultsContainer suggestName={this.state.suggestedNames}/>
            </div>
        );
    }
}

export default App;