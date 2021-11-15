import { BitNavMenuProps } from '../bit-nav-menu/bit-nav-menu.interface';
import { BitNavbarBrandProps } from '../bit-navbar-brand/bit-navbar-brand.interface';
import { BitNavbarSearchProps } from '../bit-navbar-search/bit-navbar-search.interface';

export interface BitNavbarProps {
  navBrand: BitNavbarBrandProps
  navSearch: BitNavbarSearchProps
  navMenu: BitNavMenuProps  
}