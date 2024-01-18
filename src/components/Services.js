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
  max-width: 900px;
  height: 1000px;
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
  width: 400px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  }
`;

// ServicesPage component remains the same
const BookNowButton = styled(Link)`
  display: inline-block;
  padding: 8px 15px;
  margin-left: 20px; // Space from the price
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
  width: 1400px
`;
const Price = styled.p`
  margin-top: 10px; // Add some space above the price
   // Optional: to highlight the price
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

          </Description>
        </Service>
        <Service>
        <Img style={{ backgroundImage: `url("/girl2.jpg")` }} />
          <Description>
            <ServiceTitle>Waxing</ServiceTitle>
            <p>starts with a thin layer of warm wax applied to the hairs you wish to remove. A paper strip is placed over the top, the wax solidifies, and gentle pressure is applied to trap the individual hairs. Then, the strip is swiftly pulled away, pulling the hairs out directly from the root. (Approx. 60 min)</p>
          </Description>
        </Service>
        <Service>
        <Img style={{ backgroundImage: `url("/girl2.jpg")` }} />
          <Description>
            <ServiceTitle>Eyebrow Lamination and Tint</ServiceTitle>
            <p>Is essentially a perm for your hairs, which can create a fuller more defined style. (Approx. 60 min)</p>
          </Description>
        </Service>
      </ServicesContainer>
      <Footer />
    </MainDiv>
  );
};

export default ServicesPage;
