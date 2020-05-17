import React from 'react';

import { Header, LogoMoto,   } from './LandingStyles';
import Logo from '../../components/logo/Logo';
import Input from '../../components/form/Input/Input';

const Landing = () => {
  return (
    <Header>
      <LogoMoto>
        <Logo />
        <p>Connect and share with other people</p>
      </LogoMoto>
      <SignForm>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <button>Login</button>
      </SignForm>
    </Header>
  );
};

export default Landing;
