import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';



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
  width: 700px;
  text-align: center;
`;
const Heading5 = styled.h5`
  opacity: 0.8;
  color: #f2f2f2;
  font-size: 24px;
  display: inline-block;
  position: relative;
  padding: 0 30px;
  margin: 0 10px;
  overflow-wrap: break-word; /* Use overflow-wrap instead of word-wrap */

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-top: 2px solid #000;
    width: 40px;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: -30px;
  }

  &::after {
    right: -30px;
  }
`;
const Heading1 = styled.h1`
opacity: .8;
color: #f2f2f2;
  font-size: 50px;
  margin-top: 20px;

`;

const Paragraph = styled.p`
  opacity: .8;
  color: #f2f2f2;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  width: 300px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const BookNowButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: #ffcc99;
  border: none;
  width: 150px;
`;

const LearnMoreButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 14px;
  color:white;
  background-color: black;
  border: 2px solid white;
  width: 150px;
  opacity: 0.8;
`;


const HomePage = () => {
  return (
    <div id = "home">
      <Navigation />
      <HomePageContainer>
      <AttentionDiv>
        <Heading5>Attention-Grabbing Heading</Heading5>
        <Heading1>Enhance your look with our stunning lash extensions</Heading1>
        <Paragraph>
          Our professional techniques will change the way you feel about yourself
        </Paragraph>
        <ButtonsContainer>
          <BookNowButton>Book Now</BookNowButton>
          <LearnMoreButton>Learn More</LearnMoreButton>
        </ButtonsContainer>
      </AttentionDiv>
    </HomePageContainer>
    </div>
  );
}

export default HomePage;
