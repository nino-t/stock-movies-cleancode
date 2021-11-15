import React from 'react';
import { useHistory } from 'react-router-dom';
import ImageLogo from '../../assets/images/logo.png';
import useQuery from '../../utils/use-query';
import { Movie } from '../../app/movies/movies.interface';
import { fetchMovies } from '../../app/movies/movies.api';
import BitLayout from '../../components/bit-layout/bit-layout.component';
import BitNavbar from '../../components/bit-navbar/bit-navbar.component';
import { Ref as RefBitNavbarSearch } from '../../components/bit-navbar-search/bit-navbar-search.component';
import BitAutocompleteSearching from '../../components/bit-autocomplete-searching/bit-autocomplete-searching.component';

const brand = {
  href: '/browse',
  title: 'StockMovie',
  image: ImageLogo
}

const menus = [
  {
    label: 'Sign up',
    href: '/accounts/sign-up'
  },
  {
    label: 'Sign in',
    href: '/accounts/sign-in'
  }
];

const Layout: React.FC = ({ children }) => {
  const query  = useQuery();
  const history = useHistory();
  const keyword = query.get('q') ?? '';

  const searchRef = React.useRef<RefBitNavbarSearch>(null);
  const [searchIsOpen, setSearchIsOpen] = React.useState<boolean>(false);
  const [searchkeyword, setSearchKeyword] = React.useState<string>('');
  const [searchResults, setSearchResults] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    const closeAutocomplete = (e: any): void => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchIsOpen(false);
      }
    }  

    document.addEventListener('mousedown', closeAutocomplete);
    return () => document.removeEventListener('mousedown', closeAutocomplete); 
  }, []);

  React.useEffect(() => {
    let cancel = false;
    setSearchIsOpen(true);
    fetchMovies({
      q: searchkeyword,
      page: 1
    })
      .then((response) => {
        if (cancel) {
          return;
        }

        const results = response?.movies ?? [];
        setSearchResults(results);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => { 
      cancel = true;
    }
  }, [searchkeyword]);

  const handleNavbarSearch = (keyword: string): void => {
    history.push(`/search?q=${keyword}`);
  }

  const handleAutoComplete = (keyword: string): void => {
    setSearchKeyword(keyword);
  }

  const getSearchResults = React.useCallback(() => {
    return searchResults.map((item) => {
      return {
        title: item.Title,
        clickHandler: () => history.push(`/watch?v=${item.imdbID}`)
      }
    })
  }, [history, searchResults]);

  const memoSearchResults = React.useMemo(() => getSearchResults(), [getSearchResults])

  const autocompleteIsOpen = searchResults.length > 0 && searchIsOpen && keyword !== searchkeyword;

  return (
    <BitLayout>
      <BitNavbar
        navBrand={brand}
        navSearch={{
          ref: searchRef,
          value: keyword,
          placeholder: 'What do you want to watch?',
          handleSearch: handleNavbarSearch,
          autoCompleteHandler: (keyword) => handleAutoComplete(keyword),
          autoCompleteComponent: autocompleteIsOpen && (
            <BitAutocompleteSearching
              results={memoSearchResults}
            />
          )
        }}
        navMenu={{
          menus: menus
        }}
      />
      {children}
    </BitLayout>
  );
}

export default Layout;