import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

export const Wrapper = styled.ul`
  ${tw`flex m-0 p-0`};
`;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const MenuLink = styled(Link)`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`;