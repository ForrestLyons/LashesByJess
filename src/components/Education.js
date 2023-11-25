import React from 'react';
import styled from 'styled-components';
import  { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #efd9d7;
    color: white; // Set the default text color to white or adjust as needed
    font-family: 'Your Preferred Font', sans-serif; // Add your preferred font
  }
`;

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
  height: 100vh;
  text-align: center;
  font-size: 20px;
   /* Add this to enable vertical scrolling */
`;

const LogoContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 100px;
`;



const Heading2 = styled.h2`
  font-size: 55px;
  text-align: left;
  border-bottom: 2px solid #B76E79;
  margin-bottom: 60px;
`;
const Heading3 = styled.h2`
  color: #dfb3ae;
  font-size: 55px;
  text-align: center;
  margin-bottom: 60px;
`;

const ParallaxWrapper = styled.div`
  height: 400px;
  background: url('/learning.jpg') center/cover no-repeat;
  background-attachment: fixed;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const EducationContent = styled.div`
  /* Add styling for the content after the ParallaxWrapper */
  padding: 20px;
`;

const FooterWrapper = styled.footer`
  position: relative;
  background-color: #3c3c3c; /* Set the background color as needed */
  color: white; /* Set the text color as needed */
  padding: 20px; /* Adjust padding as needed */
  text-align: center;
`;

const Waves = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px; /* Adjust the height of the waves */
`;

const Wave = styled.div`
  height: 100%;
  width: 100%;
  background: url('/wave.svg') repeat-x; /* Use an SVG image for the wave effect */
`;

const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Adjust margin as needed */
`;

const SocialIconItem = styled.li`
  margin: 0 10px; /* Adjust margin as needed */
`;

const SocialIconLink = styled.a`
  color: white; /* Set the color of the social icons */
  font-size: 24px; /* Adjust font size as needed */
  text-decoration: none;

  &:hover {
    color: #B76E79; /* Set the hover color as needed */
  }
`;





const CopyRight = styled.p`
  margin: 0;
  font-size: 14px; /* Adjust font size as needed */
`;

const EducationPage = () => {
  return (

    <div id="/education">
      <GlobalStyle />
      <PageWrapper>
        <LogoContainer>
          <Logo src="/path_to_your_logo.png" alt="Logo" />
        </LogoContainer>
        <Heading2>Education</Heading2>
        {/* Add your education details here */}
        <ParallaxWrapper />
        <EducationContent>
          {/* Content that can be scrolled */}
          <p>We are a team​ of certified and licensed beauty industry professionals with one goal in mind: the wellbeing of our clients. We believe that everybody deserves to feel great about the way they look, and our variety of services is suitable for every need. We offer affordable, safe and painless treatments for people of all ages. Our team has been carefully selected and trained, and we only use industry-approved, state-of-the-art technologies. It will be our pleasure to meet – get in touch today!</p>
          <Heading3>My client's well being is first and foremost!</Heading3>
        </EducationContent>
        <FooterWrapper>
      <Waves>
        <Wave />
      </Waves>
      <SocialIcons>
        {/* Add your social icons and links here */}
        <SocialIconItem>
          <SocialIconLink href="/facebook.png">
            <ion-icon name="logo-facebook"></ion-icon>
          </SocialIconLink>
        </SocialIconItem>
        <SocialIconItem>
          <SocialIconLink href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </SocialIconLink>
        </SocialIconItem>
      </SocialIcons>

      <CopyRight>&copy;2021 Nadine Coelho | All Rights Reserved</CopyRight>
    </FooterWrapper>
      </PageWrapper>
    </div>
  );
};

export default EducationPage;
