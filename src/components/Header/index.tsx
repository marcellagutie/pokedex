import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo } from './styled'
import Search from '../Search';
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header>
      <Container>
          <Link to="/">
            <Logo title="Home" alt="home" src={logo} />
          </Link>
          <Search />
      </Container>
    </header>
  );
};
export default Header;
