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
    largeImgData: { src: '', alt: '' },
  };

  setQuery = query => {
    this.setState({ query: query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  shareSrc = (src, alt) => {
    this.setState({ largeImgData: { src, alt } });
  };

  render() {
    const { largeImgData, showModal, query } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.setQuery}></Searchbar>
        <Gallery
          query={query}
          onImgClick={this.toggleModal}
          shareSrc={this.shareSrc}
        ></Gallery>
        {showModal && (
          <ShowModal onClose={this.toggleModal}>
            <img src={largeImgData.src} alt={largeImgData.alt} />
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
