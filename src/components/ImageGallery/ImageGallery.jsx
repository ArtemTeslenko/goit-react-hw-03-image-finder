import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery.styled';
import GalleryItem from '../ImageGalleryItem';

class Gallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  KEY = '30103302-a3ef06cdfdc78e2e196d775c9';

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;

    if (prevProps.query !== query) {
      this.setState({
        images: [],
        status: 'pending',
      });
      fetch(
        `https://pixabay.com/api/?key=${this.KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error('Search error, please put the correct value.')
          );
        })
        .then(data =>
          this.setState(previous => ({
            images: [...previous.images, ...data.hits],
            status: 'resolved',
            page: (previous.page += 1),
          }))
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <p>Start searching.</p>;
    }

    if (status === 'pending') {
      return <p>Loading...</p>;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <ImageGallery>
          {[...images].map(({ webformatURL, tags, id }) => {
            return (
              <GalleryItem key={id} src={webformatURL} alternative={tags} />
            );
          })}
        </ImageGallery>
      );
    }
  }
}

export default Gallery;
