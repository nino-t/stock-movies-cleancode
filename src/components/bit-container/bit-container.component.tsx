import React from 'react';
import tw, { styled } from 'twin.macro';

const Wrapper = styled.div`
  ${tw`container mx-auto`};
`
const BitContainer: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default BitContainer;