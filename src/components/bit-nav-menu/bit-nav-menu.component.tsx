import React from 'react';
import * as s from './bit-nav-menu.styled';
import * as i from './bit-nav-menu.interface';

const BitNavMenu: React.FC<i.BitNavMenuProps> = ({ menus }) => {
  return (
    <s.Wrapper>
      {
        menus.map((menu, index) => (
          <s.MenuItem key={index}>
            <s.MenuLink to={menu.href}>{menu.label}</s.MenuLink>
          </s.MenuItem>            
        ))
      }
    </s.Wrapper>
  );
}

export default BitNavMenu;