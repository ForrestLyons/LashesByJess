import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; /* Align items to the start and end */
  align-items: center; /* Vertically center items */
`;

const Logo = styled.img`
  height: 30px; /* Set the desired height of your logo */
  /* Add any additional styling for your logo here */
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 16px;
  margin-right: 10px;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <Logo src="path_to_your_logo.png" alt="Logo" /> {/* Add your logo here */}
      <div>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#booknow">Book Now</NavLink>
      </div>
    </NavBar>
  );
}

export default Navigation;
