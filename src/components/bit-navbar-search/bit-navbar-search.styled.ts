import tw, { styled } from 'twin.macro';

export const Form = styled.form``;

export const Field = styled.div`
  border: 2px solid #D1D5DB;
  border-radius: 6px;
  ${tw`flex`};
`;

export const Input = styled.input.attrs({
  type: 'text'
})`
  ${tw`py-2 px-4`};
  width: calc(100% - 40px);
  background: transparent;
  outline: none;

  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #FFFFFF;
  }
  :-ms-input-placeholder {
    color: #FFFFFF;
  }
`;

export const Submit = styled.button.attrs({
  type: 'submit'
})`
  width: 40px;
  content: '';
  ${tw`flex justify-center items-center`};

  &:before {
    width: 18px;
    height: 18px;
    content: '';
    display: block;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: contain !important;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDEzTDkgOU0xMC4zMzMzIDUuNjY2NjdDMTAuMzMzMyA4LjI0NCA4LjI0NCAxMC4zMzMzIDUuNjY2NjcgMTAuMzMzM0MzLjA4OTM0IDEwLjMzMzMgMSA4LjI0NCAxIDUuNjY2NjdDMSAzLjA4OTM0IDMuMDg5MzQgMSA1LjY2NjY3IDFDOC4yNDQgMSAxMC4zMzMzIDMuMDg5MzQgMTAuMzMzMyA1LjY2NjY3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);  
  }
`;