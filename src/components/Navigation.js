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

    display: flex;
    flex-direction: column;
    position: fixed; // Use fixed instead of absolute
    top: 60px; // Adjust based on your navbar height
    left: 0;
    background-color: #000;
    width: 100%;
    z-index: 999; // Ensure this is below Na

  }
`;
const Hamburger = styled.div`
  display: none;


  @media (max-width: 768px) {
    font-size: 24px;
    display: block;
    cursor: pointer;
    color: white;
    height: 100px;
    z-index: 9;
    position: relative;


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
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Navigation = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    console.log("Toggling Mobile Nav");
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (

      <NavBar>
        <Paragraph>LASHES BY JESS</Paragraph>

        <Hamburger onClick={toggleMobileNav} >
        ☰
      </Hamburger>
        <NavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booknow">BOOK NOW</NavLink>
          {/* Add more NavLink components for other pages */}
        </NavLinkContainer>
        {isMobileNavVisible && (
        <MobileNavMenu >
        <NavLink to="/" onClick={toggleMobileNav}>Home</NavLink>
        <NavLink to="/education" onClick={toggleMobileNav}>Education</NavLink>
        {/* More links */}
      </MobileNavMenu>
      )}
      </NavBar>


  );
}

export default Navigation;
