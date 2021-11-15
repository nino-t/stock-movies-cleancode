import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div``;

export const Poster = styled.img`
  ${tw`cursor-pointer`};
`;

export const Title = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #111827;
`;

export const Year = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #9CA3AF;
`;