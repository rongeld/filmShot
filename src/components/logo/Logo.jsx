import React from 'react';
import logo from '../../assets/logo.png';
import { LogoLink } from './LogoStyles';

const Logo = () => (
  <LogoLink>
    <img src={logo} alt="Logo" />
  </LogoLink>
);

export default Logo;
