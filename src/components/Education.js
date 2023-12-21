import React from 'react';
import styled, { keyframes } from 'styled-components';

import HomePage from './HomePage';
import ContactPage from './Contact';
import ServicesPage from './Services';




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

const Footer = styled.footer`
  max-width: 1075px;
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
  color:black;
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
    transform: translateY(-10px);
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

const MenuLink = styled.a`
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

const Copyright = styled.p`
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
`;

const PageWrapper = styled.div`
  padding-top: 250px;

  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  font-size: 20px;
   /* Add this to enable vertical scrolling */
`;

const LogoContainer = styled.div`
  text-align: center;

`;

const Logo = styled.img`
  height: 150px;
  margin-bottom: -25px;



`;



const Heading2 = styled.h2`

  font-size: 75px;
  font-weight: 200;
  text-align: center;
  border-bottom: 2px dashed #B76E79;

`;
const Heading3 = styled.h3`
  font-weight: 400;
  font-size: 80px;
  text-align: center;

`;

const ParallaxWrapper = styled.div`
  height: 400px;
  border-radius: 10px;

  background: url('/learning.jpg') center/cover no-repeat;
  background-attachment: fixed;
  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const EducationContent = styled.div`
  /* Add styling for the content after the ParallaxWrapper */
  font-size: 30px;

`;


const MainDiv = styled.div`
  background-color: #FAC0D5;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;


`
const Paragraph = styled.p`
font-weight: 600;

`
const Icon = styled.img`
height: 50px;

`

const EducationPage = () => {
  return (

    <MainDiv id="education">





      <PageWrapper>
        <LogoContainer>
          <Logo src="/eyelash.png" alt="eyelash" />
        </LogoContainer>
        <Heading2>Education</Heading2>

        <ParallaxWrapper />
        <EducationContent>
          <Paragraph>We are a team​ of certified and licensed beauty industry professionals with one goal in mind: the wellbeing of our clients. We believe that everybody deserves to feel great about the way they look, and our variety of services is suitable for every need. We offer affordable, safe and painless treatments for people of all ages. Our team has been carefully selected and trained, and we only use industry-approved, state-of-the-art technologies. It will be our pleasure to meet – get in touch today!</Paragraph>
          <Heading3>My client's well being is first and foremost!</Heading3>
        </EducationContent>
        <Footer>

          <SocialIcons>
          <SocialIconItem>
            <SocialIconLink href="">
            <Icon src="/facebook.png"></Icon>
            </SocialIconLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialIconLink href="#">
              <Icon src="/instagram.png"></Icon>
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
          <MenuItem><MenuLink href={HomePage}>Home</MenuLink></MenuItem>
          <MenuItem><MenuLink href={EducationPage}>Education</MenuLink></MenuItem>
          <MenuItem><MenuLink href={ContactPage}>Contact</MenuLink></MenuItem>
          <MenuItem><MenuLink href={ServicesPage}>Services</MenuLink></MenuItem>
          {/* <MenuItem><MenuLink href={}>Contact</MenuLink></MenuItem> */}
        </Menu>
        <Copyright>&copy;2021 Nadine Coelho | All Rights Reserved</Copyright>
      </Footer>
      </PageWrapper>

    </MainDiv>
  );
};

export default EducationPage;
