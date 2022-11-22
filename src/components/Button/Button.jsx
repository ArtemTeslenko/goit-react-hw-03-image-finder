import React from 'react';
import { Button } from './Button.styled';

export default function LoadMore({ onLoadMoreClick, children }) {
  return (
    <Button type="button" onClick={() => onLoadMoreClick()}>
      {children}
    </Button>
  );
}
