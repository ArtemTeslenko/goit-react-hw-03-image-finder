import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Gallery from './ImageGallery';

class App extends Component {
  state = {
    query: '',
  };

  setQuery = query => {
    this.setState({ query: query });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.setQuery}></Searchbar>
        <Gallery query={this.state.query}></Gallery>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          theme={'colored'}
        />
      </div>
    );
  }
}

export default App;
