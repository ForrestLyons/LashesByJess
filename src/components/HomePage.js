import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
 /* Use rgba for transparency */
background-image: url('/woman.jpg'); /* Set the background image path */
background-size: cover;
background-position: center;
opacity: .8; /* Set the opacity value here (0.0 to 1.0) */
  height: 100vh;/* Set the background color */
`;

const Testimonial = styled.div`
  /* Add your styles for the testimonial section */
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Testimonial>
        {/* Add your testimonial content here */}
      </Testimonial>
      {/* Add any additional content for the homepage */}
    </HomePageContainer>
  );
}

export default HomePage;
