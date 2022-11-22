import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import Gallery from './ImageGallery';
import ShowModal from './Modal';

class App extends Component {
  state = {
    query: '',
    showModal: false,
  };

  setQuery = query => {
    this.setState({ query: query });
  };

  onImgClick = () => {
    console.log('imgClick');
    this.setState(previous => ({
      showModal: !previous.showModal,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.setQuery}></Searchbar>
        <Gallery query={this.state.query} onImg={this.onImgClick}></Gallery>
        {this.state.showModal && (
          <ShowModal>
            <img
              src="https://cdn.pixabay.com/user/2016/09/18/22-38-35-578_250x250.jpg"
              alt="img"
            />
          </ShowModal>
        )}
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
