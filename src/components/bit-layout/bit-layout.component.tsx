import React from 'react';
import * as i from './bit-layout.styled';

const BitLayout: React.FC = ({ children }) => {
  return (
    <i.Wrapper>
      {children}
    </i.Wrapper>
  );
}

export default BitLayout;