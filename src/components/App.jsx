import React, { Component } from 'react';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    query: '',
    requestResult: null,
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=30103302-a3ef06cdfdc78e2e196d775c9&q=cat&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12'
    )
      .then(result => result.json())
      .then(data => this.setState({ requestResult: data }));
  }

  setQuery = query => {
    this.setState({ query: query });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.setQuery}></Searchbar>
        <div>
          {this.state.requestResult && (
            <div>
              <p>{this.state.requestResult.hits[0].pageURL}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
