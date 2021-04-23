import React from 'react';
import styled from 'styled-components';
import logoSrc from '../images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <Container>
      <HeaderLinks>
        <Logo src={logoSrc} />
        <HeaderLink>Features</HeaderLink>
        <HeaderLink>Pricing</HeaderLink>
        <HeaderLink>Resources</HeaderLink>
      </HeaderLinks>

      <HeaderButtons>
        <Login>Login</Login>
        <SignUp>Sign Up</SignUp>
      </HeaderButtons>

      <HeaderHamburgerMenu>
        <MenuIcon />
      </HeaderHamburgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  min-height: 60px;
`;

const Logo = styled.img`
  max-width: 120px;
  max-height: 33px;
  margin-right: 3rem;
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: hsl(0, 0%, 75%);
  transition: color 300ms ease;
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 2rem;
  }

  :hover {
    color: hsl(255, 11%, 22%);
    transition: color 200ms ease;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderButtons = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.button`
  margin-right: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  foont-size: 1.4rem;
  color: hsl(0, 0%, 75%);
  transition: color 200ms ease;
  background: transparent;
  border: none;
  cursor: pointer;

  :hover {
    color: hsl(257, 27%, 26%);
    transition: color 200ms ease;
  }
`;

const SignUp = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  foont-size: 1.4rem;
  color: white;
  background-color: hsl(180, 66%, 49%);
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 25px;
  opacity: 1;
  transition: opacity 200ms ease;
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transition: opacity 200ms ease;
  }
`;

const HeaderHamburgerMenu = styled.div`
  display: none;

  svg {
    font-size: 3.5rem;
    color: hsl(257, 7%, 63%);
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
