import tw, { styled } from 'twin.macro';

export const Wrapper = styled.ul`
  ${tw`absolute top-full right-0 left-0 bg-white rounded mt-1 divide-y p-1`};
`;

export const Item = styled.li`
  ${tw`p-2`};
`;

export const ItemText = styled.span`
  ${tw`text-base inline-flex cursor-pointer`};

  &:after {
    width: 14px;
    height: 14px;
    content: '';
    display: block;
    margin-left: 2px;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: contain !important;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iY3VycmVudENvbG9yIj4KICAgIDxwYXRoIGQ9Ik0xMSAzYTEgMSAwIDEwMCAyaDIuNTg2bC02LjI5MyA2LjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0TDE1IDYuNDE0VjlhMSAxIDAgMTAyIDBWNGExIDEgMCAwMC0xLTFoLTV6IiAvPgogICAgPHBhdGggZD0iTTUgNWEyIDIgMCAwMC0yIDJ2OGEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0ydi0zYTEgMSAwIDEwLTIgMHYzSDVWN2gzYTEgMSAwIDAwMC0ySDV6IiAvPgo8L3N2Zz4=);  
  }
`;