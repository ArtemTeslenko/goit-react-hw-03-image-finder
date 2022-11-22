import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery.styled';
import GalleryItem from '../ImageGalleryItem';
import LoadMore from '../Button';

class Gallery extends Component {
  state = {
    status: 'idle',
    images: [],
    error: null,
    page: 0,
  };

  KEY = '30103302-a3ef06cdfdc78e2e196d775c9';

  onLoadMoreClick = () => {
    this.setState(previous => ({
      page: (previous.page += 1),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;

    if (prevProps.query !== query) {
      this.setState({
        images: [],
        page: 1,
      });
    }

    if (prevState.page !== page) {
      this.setState({
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
        <>
          <ImageGallery>
            {[...images].map(({ id, tags, webformatURL, largeImageURL }) => {
              return (
                <GalleryItem
                  key={id}
                  alternative={tags}
                  src={webformatURL}
                  largSrc={largeImageURL}
                  onImgClick={this.props.onImgClick}
                />
              );
            })}
          </ImageGallery>
          <LoadMore onLoadMoreClick={this.onLoadMoreClick}>Load more</LoadMore>
        </>
      );
    }
  }
}

export default Gallery;
