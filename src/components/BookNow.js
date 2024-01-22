import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { InlineWidget } from "react-calendly";


// Styled components
const Title = styled.h1`
margin-top: 100px;
  text-align: center;
  margin-top: 20px;
  // Add more styling as needed
`;

const CalendarContainer = styled.div`
  margin: 40px auto;
  width: 600px;
  height: 100%;
  background-color: #FAC0D5;
  padding: 20px;
  border-radius: 8px;
  opacity: .8;
  // Add more styling as needed
`;
 const MainDiv = styled.div`
 background-color: #FAC0D5;
 padding-top: 200px;
 `

const BookNow = () => {
  return (
    <MainDiv>
      <Title>Schedule Your Appointment Now!</Title>
      <CalendarContainer>
        <InlineWidget url="https://calendly.com/jlcaty3" />
      </CalendarContainer>
      <Footer/>
    </MainDiv>
  );
};

export default BookNow;
