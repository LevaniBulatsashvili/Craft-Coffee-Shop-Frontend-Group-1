import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components
const Navbar = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 20px;

  &:hover {
    color: darkgoldenrod;
  }

  &.active {
     color: #f0a500;
    font-weight: bold;
    
  }
`;

const Header = () => {
  return (
    <Navbar>
      <StyledLink to="/coffee" >  Coffee </StyledLink>
      <span>|</span>
      <StyledLink to="/ingredients"> Ingredients </StyledLink>
    </Navbar>
  );
};

export default Header;
