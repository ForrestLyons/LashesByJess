import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { InlineWidget } from "react-calendly";


const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
  margin-top: 20px;
`;

const CalendarContainer = styled.div`
  margin: 40px auto;
  width: 500px;
  height: 100%;
  background-color: #FAC0D5;
  padding: 20px;
  border-radius: 8px;
  opacity: .8;



  @media (max-width: 390px) {
    max-width: 300px;
    padding: 10px;
    margin-left: 10px;
  }

  @media (max-width: 430px) {
    max-width: 300px;
    padding: 10px;
  }
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
        <InlineWidget url="https://calendly.com/jlcaty3" style={{ minWidth: '300px', height: '400px' }} />
      </CalendarContainer>
      <Footer/>
    </MainDiv>
  );
};

export default BookNow;
