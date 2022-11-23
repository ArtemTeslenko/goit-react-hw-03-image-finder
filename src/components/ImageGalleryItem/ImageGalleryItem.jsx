import React from 'react';
import { GalleryListItem, GalleryImg } from './ImageGalleryItem.styled';

export default function GalleryItem({
  src,
  alternative,
  onImgClick,
  largSrc,
  shareSrc,
}) {
  return (
    <GalleryListItem>
      <GalleryImg
        src={src}
        alt={alternative}
        onClick={() => {
          onImgClick(largSrc);
          shareSrc(largSrc, alternative);
        }}
      />
    </GalleryListItem>
  );
}
