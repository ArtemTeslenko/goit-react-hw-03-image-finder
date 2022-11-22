import React from 'react';
import { GalleryListItem, GalleryImg } from './ImageGalleryItem.styled';

export default function GalleryItem({ src, alternative, onImgClick, largSrc }) {
  return (
    <GalleryListItem>
      <GalleryImg
        src={src}
        alt={alternative}
        onClick={() => onImgClick(largSrc)}
      />
    </GalleryListItem>
  );
}
