import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: transparent; /* Set the background color to transparent */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fixed position to keep the navbar at the top */
  width: 100%; /* Make the navbar span the entire width */
  z-index: 2; /* Set a higher z-index to ensure it's on top of the content */
`;

const Logo = styled.img`
  height: 30px;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  position: relative;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 14px;
  margin-right: 10px;
  opacity: 0.9;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #B76E79; /* Rose gold color */
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 1s ease; /* Slower transition */
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <Logo src="/logo.jpg" alt="Logo" />
      <NavLinkContainer>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#booknow">Book Now</NavLink>
      </NavLinkContainer>
    </NavBar>
  );
}

export default Navigation;
