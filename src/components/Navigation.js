import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavBar = styled.nav`
  height: 40px;
  background-color: black; /* Set the background color to transparent */
  padding: 35px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Fixed position to keep the navbar at the top */
  width: 100%; /* Make the navbar span the entire width */
  z-index: 1000; /* Set a higher z-index to ensure it's on top of the content */
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    padding: 10px 20px;

  }

`;

const Paragraph = styled.p`
  height: 30px;
  color: white;
  font-size: 35px;
  @media (max-width: 790px) {
    font-size: 14px;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
  @media (max-width: 768px) {
    display: none;

  }
`;
const MobileNavMenu = styled.div`
display: none;

@media (max-width: 768px) {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #000;
  width: 130px;
  z-index: 10;
}
`;
const HamburgerIcon = styled.div`
@media (max-width: 768px) {
cursor: pointer;
display: block;
z-index: 998;
width: 30px; // Width of the hamburger lines
height: 3px; // Height of the hamburger lines
background-color: white;
position: relative;
transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
transition: transform 0.3s;

&::before, &::after {
  content: '';
  position: absolute;
  width: 30px; // Match the width of the hamburger lines
  height: 3px; // Match the height of the hamburger lines
  background-color: white;
  transition: transform 0.3s, top 0.3s, opacity 0.3s;
}

&::before {
  top: ${({ open }) => open ? '0' : '-10px'};
  transform: ${({ open }) => open ? 'rotate(90deg)' : 'rotate(0)'};
}

&::after {
  top: ${({ open }) => open ? '0' : '10px'};
  opacity: ${({ open }) => open ? '0' : '1'};
}
}


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
    width: 80%;
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
  @media (max-width: 768px) {
    font-size: 14px;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 65%;
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
  }
`;

const Navigation = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    console.log("Toggling Mobile Nav:", !isMobileNavVisible); // Debugging
    setIsMobileNavVisible(!isMobileNavVisible);
  };


  return (

      <NavBar>
        <Paragraph>LASHES BY JESS</Paragraph>

        <HamburgerIcon onClick={toggleMobileNav} open={isMobileNavVisible} />
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booknow">BOOK NOW</NavLink>
          {/* Add more NavLink components for other pages */}
        </NavLinkContainer>
        {isMobileNavVisible && (
  <MobileNavMenu isOpen={isMobileNavVisible}>
    <NavLink to="/" onClick={toggleMobileNav}>Home</NavLink>
    <NavLink to="/education" onClick={toggleMobileNav}>Education</NavLink>
    <NavLink to="/contact" onClick={toggleMobileNav}>Contact</NavLink>
    <NavLink to="/services" onClick={toggleMobileNav}>Services</NavLink>
    <NavLink to="/booknow" onClick={toggleMobileNav}>BOOK NOW</NavLink>
    {/* More links */}
  </MobileNavMenu>
      )}
      </NavBar>


  );
}

export default Navigation;
