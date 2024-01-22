import React from 'react';
import styled, { keyframes } from 'styled-components';
import {  Link } from 'react-router-dom';



const Icon = styled.img`
  height: 25px;

`;
const Copyright = styled.p`
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: .6rem;
  font-weight: 300;
`;


const animateWaves = keyframes`
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-position-x: 0px;
  }
`;

const animate = keyframes`
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-position-x: 0px;
  }
`;

const FooterContainer = styled.footer`

  width: 100%px;
  background: #FAC0D5;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
`;

const Waves = styled.div`

  height 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
  overflow: hidden;
  opacity: 0.2;

`;

const Wave = styled.div`
position: absolute;
top: 20;  /* Adjust this value */
left: 0;
width: 100%;
height: 5vh;  /* Adjust this value */
background: url("https://i.ibb.co/wQZVxxk/wave.png");
background-size: 900px 100px;

`;

const Wave1 = styled(Wave)`im
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: ${animateWaves} 4s linear infinite;

`;

const Wave2 = styled(Wave)`
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: ${animate} 4s linear infinite !important;

`;

const Wave3 = styled(Wave)`
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: ${animateWaves} 3s linear infinite;

`;

const Wave4 = styled(Wave)`
  z-index: 999;
  opacity: 0.4;
  bottom: 20px;
  animation: ${animate} 3s linear infinite;
`;

const SocialIcons = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
`;

const SocialIconItem = styled.li`
  list-style: none;
`;

const SocialIconLink = styled.a`
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);;
  }
`;

const Menu = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
`;

const MenuItem = styled.li`
  list-style: none;
`;

const MenuLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;

  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>

          <SocialIcons>
          <SocialIconItem>
            <SocialIconLink href="https://www.facebook.com/yourprofile">
              <Icon src="/facebook.png"></Icon>
            </SocialIconLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialIconLink href="https://www.instagram.com/yourprofile">
              <Icon src="/instagram.png"></Icon>
            </SocialIconLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialIconLink href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </SocialIconLink>
          </SocialIconItem>
        </SocialIcons>
        <Waves>
          <Wave1 />
          <Wave2 />
          <Wave3 />
          <Wave4 />
        </Waves>

        <Menu>
          <MenuItem><MenuLink to="/">Home</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/education">Education</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/contact">Contact</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/services">Services</MenuLink></MenuItem>
          {/* <MenuItem><MenuLink href={}>Contact</MenuLink></MenuItem> */}
        </Menu>
        <Copyright>&copy;2024 LyonsDev | All Rights Reserved</Copyright>
      </FooterContainer>
  );
}

export default Footer;
