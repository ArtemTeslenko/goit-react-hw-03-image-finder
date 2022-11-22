import React from 'react';
import { Overlay, Paper } from './Modal.styled';

export default function ShowModal({ children }) {
  return (
    <Overlay>
      <Paper>{children}</Paper>
    </Overlay>
  );
}
