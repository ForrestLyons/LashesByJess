import React, {useState} from 'react';
import styled from 'styled-components';
import Footer from './Footer';

// Styled Components
const ContactFormWrapper = styled.div`

  max-width: 1075px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Adjust the height as needed */

`;
const MainDiv = styled.div`
background-color: #FAC0D5;
width: 100%;

`;



const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px; /* Adjust the max-width as needed */
  width: 100%;

`;

const FormGroup = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: column;

`;

const Label = styled.label`
font-size: 1.2rem;
margin-bottom: 8px;
width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  opacity: 0.5;

`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  opacity: 0.5;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  background-color: #e590ae;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an HTTP POST request to the server-side endpoint
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Reset form fields after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <MainDiv>


    <ContactFormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name: </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email: </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject: </Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ContactFormWrapper>
    <Footer />
    </MainDiv>
  );
};

export default ContactPage;
