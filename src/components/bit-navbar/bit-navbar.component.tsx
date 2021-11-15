import React from 'react';
import * as s from './bit-navbar.styled';
import * as i from './bit-navbar.interface';
import BitNavMenu from '../bit-nav-menu/bit-nav-menu.component';
import BitNavbarBrand from '../bit-navbar-brand/bit-navbar-brand.component';
import BitNavbarSearch from '../bit-navbar-search/bit-navbar-search.component';

const BitNavbar: React.FC<i.BitNavbarProps> = ({ navBrand, navSearch, navMenu }) => {
  return (
    <s.Wrapper>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-4/12 flex justify-start">
            <BitNavbarBrand {...navBrand} />
          </div>
          <div className="w-4/12">
            <BitNavbarSearch {...navSearch} />
          </div>
          <div className="w-4/12 flex justify-end">
            <BitNavMenu {...navMenu} />
          </div>
        </div>
      </div>
    </s.Wrapper>
  );
}

export default BitNavbar;