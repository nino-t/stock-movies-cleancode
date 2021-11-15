import React from 'react';
import * as s from './bit-autocomplete-searching.styled';
import * as i from './bit-autocomplete-searching.interface';

const BitAutocompleteSearching: React.FC<i.BitAutocompleteSearchingProps> = ({ results }) => {
  return (
    <s.Wrapper>
      {
        results.map((item, index) => (
          <s.Item key={index}>
            <s.ItemText onClick={item.clickHandler}>
              {item.title}
            </s.ItemText>
          </s.Item>
        ))
      }
    </s.Wrapper>
  );
}

export default BitAutocompleteSearching;