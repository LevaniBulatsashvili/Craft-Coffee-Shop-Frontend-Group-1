import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled-components
const Navbar = styled.nav`
  background-color: #333;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0 30px;
  font-size: 24px;

  &:hover {
    color: darkgoldenrod;
  }

  &.active {
    color: #f0a500;
  }

  &:not(:last-child) {
    border-right: 3px solid rgb(112, 112, 112);
  }
`;

const Header = () => {
  return (
    <Navbar>
      <StyledLink to="/coffees">Coffee</StyledLink>
      <StyledLink to="/ingredients">Ingredients</StyledLink>
    </Navbar>
  );
};

export default Header;
