import React from 'react';
import * as s from './bit-navbar-search.styled';
import * as i from './bit-navbar-search.interface';
import useDebounce from '../../utils/use-debounce';

export type Ref = HTMLFormElement;
export const BitNavbarSearch = React.forwardRef<Ref, i.BitNavbarSearchProps>((props, ref) => {
  const { value, placeholder, handleSearch, autoCompleteComponent,  autoCompleteHandler } = props;

  const [keyword, setKeyword] = React.useState<string>(value);
  const debouncedKeyword = useDebounce(keyword, 500);

  React.useEffect(() => {
    if (autoCompleteHandler) {
      autoCompleteHandler(debouncedKeyword);
    }
  }, [debouncedKeyword, autoCompleteHandler]);

  const submitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(keyword);
  }

  const renderAutoComplete = (): JSX.Element | null => {
    if (autoCompleteComponent) {
      return (
        <s.AutoCompleteWrapper>
          {autoCompleteComponent}
        </s.AutoCompleteWrapper>
      );
    }

    return null;
  }

  return (
    <s.Form ref={ref} onSubmit={submitForm}>
      <s.Field>
        <s.Input
          value={keyword}
          placeholder={placeholder}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <s.Submit />
      </s.Field>
      {renderAutoComplete()}
    </s.Form>
  );
});

export default BitNavbarSearch;