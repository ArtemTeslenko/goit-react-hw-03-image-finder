import React from 'react';
import { BtnWrapper, Button } from './Button.styled';

export default function LoadMore({ onLoadMoreClick, children }) {
  return (
    <BtnWrapper>
      <Button type="button" onClick={() => onLoadMoreClick()}>
        {children}
      </Button>
    </BtnWrapper>
  );
}
