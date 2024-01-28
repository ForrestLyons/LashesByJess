import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HomePageContainer = styled.div`
  background-image: url('/homepagefix.jpg');
  height:950px;

  background-size: cover;
  background-position: left center;
  opacity: 0.8;

  /* Set a minimum height to cover the viewport */
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: left;
  text-align: center;
  padding-top: 300px;
  overflow: hidden;
  @media (max-width: 390px) {
    background-size: contain; // Zooms out the image to fit it completely within the container
    background-position:  top center;
    background-repeat: no-repeat;
    height: auto;

  }
  @media (max-width: 430px) {
    background-size: contain; // Zooms out the image to fit it completely within the container
    background-position:  top center;
    background-repeat: no-repeat;
    height: auto;

  }
  @media (max-width: 280px) {
    background-size: contain; // Zooms out the image to fit it completely within the container
    background-position:  top center;
    background-repeat: no-repeat;
    height: auto;

  }
`;

const AttentionDiv = styled.div`
  width: 700px;
  text-align: center;
  margin-top: -700px;
  margin-left: -40px;
  @media (max-width: 390px) {
    width: 250px; // Adjusted width for smaller screens
    margin-top: -300px; // Adjusted margin-top for smaller screens
    margin-left: 50px;


  }

  @media (max-width: 430px) {
    width: 200px; // Adjusted width for smaller screens
    margin-top: -300px; // Adjusted margin-top for smaller screens
    margin-left: 90px;


  }
`;

const Heading5 = styled.h5`
  font-weight: 200;
  color: #black;
  font-size: 20px;
  display: inline-block;
  position: relative;
  padding: 0 30px;
  margin: 0 10px;
  overflow-wrap: break-word;
  @media (max-width: 390px) {
    font-size: 18px;


  }
  @media (max-width: 430px) {

    font-size: 15px;

  }
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

}`;

const Heading1 = styled.h1`
  font-weight: 200;
  opacity: 0.7;
  color: #black;
  font-size: 28px;
  margin-top: 20px;
  @media (max-width: 390px) {
    font-size: 15px;

  }
  @media (max-width: 430px) {
    font-size: 15px;

  }
`;

const Paragraph = styled.p`
  opacity: 0.9;
  color: #black;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  width: 300px;
  @media (max-width: 390px) {
  font-size: 15px;
  width: 200px;
  }
  @media (max-width: 430px) {
  font-size: 15px;
  width: 200px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

`;

const StyledLink = styled(Link)`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

const BookNowButton = styled(StyledLink)`
  background-color: #ffcc99;
  border: none;
  width: 150px;
  color:black;
  font-size: 15px;
  opacity: .8;
  @media (max-width: 390px) {
    width: 90px;
    height:45px;
    font-size: 13px;

  }
  @media (max-width: 430px) {
    width: 130px;
    height:50px;
    font-size: 13px;

  }
`;

const LearnMoreButton = styled(StyledLink)`
  color: white;
  background-color: black;
  border: 2px solid white;
  width: 150px;
  opacity: 0.8;
  font-size: 20px;
  @media (max-width: 390px) {

      width: 95px;
      height:45px;
      font-size: 12px;

    }
  @media (max-width: 430px) {

      width: 130px;
      height:50px;
      font-size: 12px;

    }

`;
const MainDiv = styled.div `
  background-color : #E9DCD4;
  height: 100%;
  width: 100%;
  overflow: hidden;

`



const HomePage = () => {
  return (
    <div id = "home">
      <MainDiv>
      <HomePageContainer>
      <AttentionDiv>
        <Heading5>LASHES BY JESS </Heading5>
        <Heading1>Enhance your look with our stunning lash extensions</Heading1>
        <Paragraph>
          My professional techniques will change the way you feel about yourself!
        </Paragraph>
        <ButtonsContainer>
        <BookNowButton to="/bookNow">Book Now</BookNowButton>
            <LearnMoreButton to="/education">Learn More</LearnMoreButton>
        </ButtonsContainer>
      </AttentionDiv>
    </HomePageContainer>
    </MainDiv>
    </div>
  );
}

export default HomePage;
