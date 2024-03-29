import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';


const PageWrapper = styled.div`
  padding-top: 250px;
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  font-size: 20px;
`;

const LogoContainer = styled.div`
  text-align: center;
  @media (max-width: 280px) {
    margin-top: -150px;
  }
  @media (max-width: 375px) {
    margin-top: -150px;
  }
  @media (max-width: 430px) {
    margin-top: -150px;
  }
`;

const Logo = styled.img`
  height: 150px;


  @media (max-width: 280px) {
    width: 90px;
    height:45px;


  }


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
  @media (max-width: 280px) {
    font-size: 35px;

  }
  @media (max-width: 375px) {
    font-size: 35px;

  }
  @media (max-width: 430px) {
    font-size: 30px;

  }
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
  @media (max-width: 280px) {
    height: 300px; // Reduced height for smaller screens
    background-size: cotain; // Ensure the image covers the div
    background-position: center;

  }
  @media (max-width: 375px) {
    height: 300px; // Reduced height for smaller screens


  }
  @media (max-width: 430px) {
    height: 400px; // Reduced height for smaller screens


  }
`;

const EducationContent = styled.div`
  /* Add styling for the content after the ParallaxWrapper */
  font-size: 30px;
  @media (max-width: 280px) {
    font-size: 20px;

  }
  @media (max-width: 375px) {
    font-size: 15px;

  }
  @media (max-width: 430px) {
    font-size: 20px;

  }
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
          <Paragraph>Hi! My name is Jess Valdez. I am a licensed Esthetician, and I am located in Pagosa Springs, Colorado. I started my own business in June of 2023 and I offer waxing, eyelash extensions, lamination and tinting. I would love to help accentuate your beauty, boost your self-confidence and give you the self-care you deserve! I believe that everybody deserves to feel great about the way they look, and our variety of services is suitable for every need. I offer affordable, safe and painless treatments for people of all ages. I only use industry-approved, state-of-the-art technologies. It will be my pleasure to meet – get in touch today!</Paragraph>
          <Heading3>My client's well being is first and foremost!</Heading3>
        </EducationContent>

      </PageWrapper>
<Footer />
    </MainDiv>
  );
};

export default EducationPage;
