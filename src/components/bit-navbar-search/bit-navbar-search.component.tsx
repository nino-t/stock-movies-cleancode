import React from 'react';
import * as s from './bit-navbar-search.styled';
import * as i from './bit-navbar-search.interface';

const BitNavbarSearch: React.FC<i.BitNavbarSearchProps> = ({ value, placeholder, handleSearch }) => {
  const [keyword, setKeyword] = React.useState<string>(value);

  const submitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(keyword);
  }

  return (
    <s.Form onSubmit={submitForm}>
      <s.Field>
        <s.Input
          value={keyword}
          placeholder={placeholder}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <s.Submit />
      </s.Field>
    </s.Form>
  );
}

export default BitNavbarSearch;