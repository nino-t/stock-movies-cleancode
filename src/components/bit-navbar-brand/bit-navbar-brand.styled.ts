import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`flex flex-row items-center justify-center`};
`;

export const BrandLogo = styled.img.attrs({
  width: 50
})`
  ${tw`mr-2`};
`;

export const BrandTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFF;
`;