import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
 /* Use rgba for transparency */
background-image: url('/woman.jpg'); /* Set the background image path */
background-size: cover;
background-position: center;
opacity: .8; /* Set the opacity value here (0.0 to 1.0) */
height: 100vh;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AttentionDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Heading5 = styled.h5`
  font-size: 24px;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  display: inline-block;
  padding: 0 20px;
`;
const Heading1 = styled.h1`
  font-size: 48px;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  margin-top: 30px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
`;


const HomePage = () => {
  return (
    <HomePageContainer>
      <AttentionDiv>
        <Heading5>Attention-Grabbing Heading</Heading5>
        <Heading1>Big Bold Heading</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <ButtonsContainer>
          <Button>Book Now</Button>
          <Button>Learn More</Button>
        </ButtonsContainer>
      </AttentionDiv>
    </HomePageContainer>
  );
}

export default HomePage;
