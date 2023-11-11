import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'; // Assuming this is the path to your Navigation component

const PageWrapper = styled.div`

  background-color: #black !important; /* Set your desired background color */
  padding: 20px;
  height: 100vh;/* Add some padding for spacing */
`;



const LogoContainer = styled.div`
  text-align: center; /* Center the logo */
`;

const Logo = styled.img`
  height: 100px; /* Set the desired height for the logo */
`;

const Heading1 = styled.h1`
  text-align: center; /* Center the heading */
`;

const EducationPage = () => {
  return (
    <div id="/education">
      <Navigation />
      <PageWrapper>
        <LogoContainer>
          <Logo src="/path_to_your_logo.png" alt="Logo" />
        </LogoContainer>
        <Heading1>Education and Credentials</Heading1>
        {/* Add your education details here */}
      </PageWrapper>
    </div>
  );
}

export default EducationPage;
