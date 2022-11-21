import React from 'react';
import { GalleryListItem, GalleryImg } from './ImageGalleryItem.styled';

export default function GalleryItem({ src, alternative }) {
  return (
    <GalleryListItem>
      <GalleryImg src={src} alt={alternative} />
    </GalleryListItem>
  );
}
