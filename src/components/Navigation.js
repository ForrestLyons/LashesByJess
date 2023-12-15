import React from 'react';
import {  Link } from 'react-router-dom';

import styled from 'styled-components';


const NavBar = styled.nav`
  height: 60px;
  background-color: black; /* Set the background color to transparent */
  padding: 35px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fixed position to keep the navbar at the top */
  width: 100%; /* Make the navbar span the entire width */
  z-index: 2; /* Set a higher z-index to ensure it's on top of the content */
  top: 0;
  left: 0;

`;

const Paragraph = styled.p`
  height: 30px;
  color: white;
  font-size: 35px;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
`;

const NavLink = styled(Link)`
  position: relative;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 18px;

  margin-right: 10px;


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
        <Paragraph>LASHES BY JESS</Paragraph>
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booknow">BOOK NOW</NavLink>
          {/* Add more NavLink components for other pages */}
        </NavLinkContainer>
      </NavBar>


  );
}

export default Navigation;
