import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import React, { PureComponent } from 'react';
import { ImageGallery } from './ImageGallery.styled';
import { Urging, Loader } from './Helpers.styled';
import GalleryItem from '../ImageGalleryItem';
import LoadMore from '../Button';
import autoscroll from '../Utils';

class Gallery extends PureComponent {
  state = {
    images: [],
    error: null,
    page: 0,
    isLoading: false,
  };

  KEY = '30103302-a3ef06cdfdc78e2e196d775c9';

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
        isLoading: true,
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
            isLoading: false,
          }))
        )
        .catch(error => this.setState({ error }));
    }
    autoscroll();
  }

  onLoadMoreClick = () => {
    this.setState(previous => ({
      page: (previous.page += 1),
    }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        {error && <p>{error}</p>}
        {images.length < 1 && !isLoading ? (
          <Urging>Start searching.</Urging>
        ) : null}
        {images && (
          <div className="gallery">
            <ImageGallery>
              {images &&
                images.map(({ id, tags, webformatURL, largeImageURL }) => {
                  return (
                    <GalleryItem
                      key={id}
                      alternative={tags}
                      src={webformatURL}
                      largSrc={largeImageURL}
                      onImgClick={this.props.onImgClick}
                      shareSrc={this.props.shareSrc}
                    />
                  );
                })}
            </ImageGallery>
          </div>
        )}
        {!isLoading && images.length > 0 ? (
          <LoadMore onLoadMoreClick={this.onLoadMoreClick}>Load more</LoadMore>
        ) : null}
        {isLoading && (
          <Loader>
            <ThreeDots color="#3f51b5" ariaLabel="three-dots-loading" />
          </Loader>
        )}
      </>
    );
  }
}

export default Gallery;

Gallery.propTypes = {
  shareSrc: PropTypes.func.isRequired,
  onImgClick: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
