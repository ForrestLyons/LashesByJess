import React from 'react';
import styled from 'styled-components';
// Styled components
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px; // Add padding around the container
`;

const ServiceImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  /* Conditional margin based on index */

margin-right: ${props => (props.isEven ? '0' : '20px')};
margin-left: ${props => (props.isEven ? '20px' : '0')};
`;

const Service = styled.div`
display: flex;
align-items: center;
margin: 40px 0;
width: 100%;
max-width: 800px;

&:nth-child(even) {
flex-direction: row-reverse;
}

@media (max-width: 768px) {
flex-direction: column;
align-items: center;
text-align: center;

css
Copy code
& > ${ServiceImage} {
  margin-bottom: 20px;
  margin-right: 0;
  margin-left: 0;
}
}
`;

// ... rest of your components


    const ServiceDescription = styled.div`
    width: 60%;
    padding: 15px; // Adjust padding as needed

    @media (max-width: 768px) {
    width: 100%; // Full width on smaller screens
    }
    `;

const ServiceTitle = styled.h2`

  margin: 0 0 10px 0; // Add bottom margin to the title
  font-size: 1.5rem; // Increase font size
`;


const MainDiv = styled.div`
background-color: pink;
`;



// Services data (could be fetched from an API or defined here)
const services = [
  { title: 'Extensions', description: ' Keep your lashes looking their best with a quick refresh to fill any spots where the eyelashes have shed.Fill: $65 | We use fans and flairs to increase the volume without weighting down your natural lashes.Full Set: $150', imageUrl: '/girl4.jpg' },
  { title: 'Lift and Tint', description :'Lift only: $50 Lift and Tint: $80',  imageUrl: '/girl2.jpg' },
  { title: 'Waxing', description: 'Lip and brow $30, ,Full face $50, bikini $50, brazilian $75', imageUrl: '/girl5.jpg' },
  { title: 'Eyebrow Lamination and Tint', description: ' $80, shape and tint $50', imageUrl: '/girl5.jpg' }
];

const ServicesPage = () => {
  return (
    <MainDiv>


    <ServicesContainer>
      {services.map((service, index) => (
        <Service key={index}>
          <ServiceImage imageUrl={service.imageUrl} />
          <ServiceDescription>
            <ServiceTitle>{service.title}</ServiceTitle>
            <p>{service.description}</p>
          </ServiceDescription>
        </Service>
      ))}
    </ServicesContainer>
     </MainDiv>
  );
};

export default ServicesPage;
