import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './bit-navbar-brand.styled';
import * as i from './bit-navbar-brand.interface';

const BitNavbarBrand: React.FC<i.BitNavbarBrandProps> = ({ title, image, href }) => {
  return (
    <Link to={href}>
      <s.Wrapper>
        <s.BrandLogo src={image} alt={title} />
        <s.BrandTitle>{title}</s.BrandTitle>
      </s.Wrapper>
    </Link>
  );
}

export default BitNavbarBrand;