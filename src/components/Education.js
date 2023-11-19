import React from 'react';
import styled from 'styled-components';
// import Navigation from './Navigation'; // Assuming this is the path to your Navigation component

const PageWrapper = styled.div`

  max-width: 1000px; /* Adjust the maximum width as needed */
  margin: 0 auto; /* This will center the element horizontally */
  padding: 16px; /* Add padding as needed */
  height: 100vh;/* Add some padding for spacing */
`;



const LogoContainer = styled.div`
  text-align: center; /* Center the logo */
`;

const Logo = styled.img`
  height: 100px; /* Set the desired height for the logo */
`;

const Heading1 = styled.h1`
  font-size: 75px;
  text-align: center; /* Center the heading */
`;
const Heading2 = styled.h2`
  font-size: 55px;
  text-align: left; /* Center the heading */
  border-bottom: 2px solid #B76E79; /* Change the color as needed */
  margin-bottom: 60px; /* Adjust the margin as needed */
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

const EducationPage = () => {
  return (
    <div id="/education">

      <PageWrapper>
        <LogoContainer>
          <Logo src="/path_to_your_logo.png" alt="Logo" />
        </LogoContainer>
        <Heading1>Lashes By Jess</Heading1>
        <Heading2>Education</Heading2>
        {/* Add your education details here */}
        <ParallaxWrapper>

        </ParallaxWrapper>
      </PageWrapper>
    </div>
  );
}

export default EducationPage;
