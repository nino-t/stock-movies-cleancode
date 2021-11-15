import React from 'react';
import { useHistory } from 'react-router-dom';
import ImageLogo from '../../assets/images/logo.png';
import useQuery from '../../utils/use-query';
import BitLayout from '../../components/bit-layout/bit-layout.component';
import BitNavbar from '../../components/bit-navbar/bit-navbar.component';

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

  const handleNavbarSearch = (keyword: string): void => {
    history.push(`/search?q=${keyword}`);
  }

  return (
    <BitLayout>
      <BitNavbar
        navBrand={brand}
        navSearch={{
          value: keyword,
          placeholder: 'What do you want to watch?',
          handleSearch: handleNavbarSearch
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