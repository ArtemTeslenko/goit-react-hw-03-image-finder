import React from 'react';
import { GalleryListItem, GalleryImg } from './ImageGalleryItem.styled';

export default function GalleryItem({ src, alternative, onImg }) {
  return (
    <GalleryListItem>
      <GalleryImg src={src} alt={alternative} onClick={() => onImg()} />
    </GalleryListItem>
  );
}
