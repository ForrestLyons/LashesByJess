import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { Link } from 'react-router-dom';

// Styled components
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px;
  width: 100%;
  height: 100%;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

`;
const Img = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin: 0 20px; // Consistent margin on both sides
`;

const Description = styled.div`
display: flex;
  flex-direction: column; // Stack elements vertically
  align-items: flex-start; // Align items to the start of the flex container
  width: 400px;
  padding: 15px;


`;

const ServiceTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
`;

// Update the Service component
const Service = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  width: 900px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > ${Img}, & > ${Description} {
      margin-left: 0;
      margin-right: 0;
    }
    @media (max-width: 280px) {
      flex-direction: column;
      align-items: center;
      text-align: left;
      margin: 20px 0; // Adjust margin for more space
      width: 250px;
      display: flex;
      &:nth-child(even) {
        flex-direction: column;
      }

  }
  @media (max-width: 375px) {
      flex-direction: column;
      align-items: center;
      text-align: left;
      margin: 20px 0; // Adjust margin for more space
      display: flex;
      &:nth-child(even) {
        flex-direction: column;
      }
    }
`;

// ServicesPage component remains the same
const BookNowButton = styled(Link)`
  display: inline-block;
  padding: 8px 15px;
  background-color: #e590ae; // Adjust the color as needed
  color: white;
  border-radius: 5px;
  text-decoration: none; // Remove underline from link
  text-align: center;
  // Add other styling as needed
`;

const MainDiv = styled.div`
  background-color: #FAC0D5;
  height: 100%;
  width: 100%;
  @media (max-width: 375px) {
    width: 100%;
  }

`;
const Price = styled.p`
  margin-top: 10px; // Add some space above the price
   // Optional: to highlight the price
`;
const StyledLink = styled.a`
margin-top: 10px; // Add some space above the price
color: #000; // Set the text color
text-decoration: underline;
  text-decoration-color: black; // Specify the color of the underline
  text-decoration-thickness: 2px;
display: block; // Make it a block element
text-align: center; // Center align the text
padding: 10px 0; // Add some padding

`;
const ServicesPage = () => {
  return (
    <MainDiv>
      <ServicesContainer>
        <Service>
        <Img style={{ backgroundImage: `url("/girl4.jpg")` }} />
          <Description>
            <ServiceTitle>Extensions</ServiceTitle>
            <p>The most realistic solution that dramatically enhances the lash line for more voluminous lashes. Lightweight and long lasting, this look will keep you coming back for more! (Approx. 2 hrs)</p>
            <Price>Full Set: $150 | Fill: $60</Price>
            <BookNowButton to="/bookNow">Book Now</BookNowButton>
          </Description>
        </Service>
        <Service>
        <Img style={{ backgroundImage: `url("/girl2.jpg")` }} />
          <Description>
            <ServiceTitle>Lift and Tint</ServiceTitle>
            <p>Say goodbye to your eyelash curler! Lash Lift is a semi-permanent treatment to create a longlasting curl to naturally straight lashes. (Approx. 60 min)</p>
            <Price>Full Set: 80$ | Lift Only: $50</Price>
            <BookNowButton to="/bookNow">Book Now</BookNowButton>

          </Description>
        </Service>
        <Service>
        <Img style={{ backgroundImage: `url("/girl1.jpg")` }} />
          <Description>
            <ServiceTitle>Waxing</ServiceTitle>
            <p>starts with a thin layer of warm wax applied to the hairs you wish to remove. A paper strip is placed over the top, the wax solidifies, and gentle pressure is applied to trap the individual hairs. Then, the strip is swiftly pulled away, pulling the hairs out directly from the root. (Approx. 60 min)</p>
            <Price>Full Set: 80$ | Lift Only: $50</Price>
            <BookNowButton to="/bookNow">Book Now</BookNowButton>

          </Description>
        </Service>
        <Service>
        <Img style={{ backgroundImage: `url("/girl5.jpg")` }} />
          <Description>
            <ServiceTitle>Eyebrow Lamination and Tint</ServiceTitle>
            <p>Is essentially a perm for your hairs, which can create a fuller more defined style. (Approx. 60 min)</p>
            <Price>Full Set: 80$ | Lift Only: $50</Price>
            <BookNowButton to="/bookNow">Book Now</BookNowButton>
          </Description>
        </Service>
      </ServicesContainer>
      <StyledLink href="/extension prep.docx" target="_blank">Please review pre-appt check list.</StyledLink>
      <Footer />
    </MainDiv>
  );
};

export default ServicesPage;
