import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import ResultsContainer from './ResultsContainer';
import './App.css';
import './SearchBox.css';
import './ResultsContainer.css';

const names = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    constructor() {
        super();
        
        this.state = {
            headerText: 'Namehub',
            headerExpanded: true,
            suggestedNames: []
        };
    }

    handleInputChange = (inputText) => {
        this.setState(
            {
                headerExpanded: !inputText, 
                suggestedNames: inputText? names(inputText): []
            }
        );
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