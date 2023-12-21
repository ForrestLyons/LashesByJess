import React from 'react';
import styled from 'styled-components';
// import { faPaperPlane, faGithub, faCodepen, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Styled Components
const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding-bottom: 100px;
`;

// const ContactHeader = styled.h1`
//   text-align: center;
//   margin: 0 auto;
//   padding: 40px 0;
//   font: 300 60px 'Oswald', sans-serif;
//   color: #fff;
//   text-transform: uppercase;
//   letter-spacing: 6px;
// `;

// const ContactWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin: 0 auto;
//   padding: 20px;
//   position: relative;
//   max-width: 840px;
// `;

// const Form = styled.form`
//   max-width: 400px;
//   font-family: 'Lato';
//   font-weight: 400;
// `;

// const FormControl = styled.div`
//   max-width: 400px;
//   background-color: #000;
//   color: #fff;
//   letter-spacing: 1px;
// `;

// const SendButton = styled.button`
//   margin-top: 15px;
//   height: 34px;
//   width: 400px;
//   overflow: hidden;
//   transition: all 0.2s ease-in-out;

//   &:hover .alt-send-button {
//     transform: translate3d(0px, -29px, 0px);
//   }
// `;

// const AltSendButton = styled.div`
//   width: 400px;
//   height: 34px;
//   transition: all 0.2s ease-in-out;
// `;

// const DirectContactContainer = styled.div`
//   max-width: 400px;
// `;

// const ContactList = styled.ul`
//   list-style-type: none;
//   margin-left: -30px;
//   padding-right: 20px;
// `;

// const ListItem = styled.li`
//   line-height: 4;
//   color: #aaa;
// `;

// const ContactText = styled.span`
//   font: 300 18px 'Lato', sans-serif;
//   letter-spacing: 1.9px;
//   color: #bbb;
// `;

// const Place = styled.span`
//   margin-left: 62px;
// `;

// const Phone = styled.span`
//   margin-left: 56px;
// `;

// const Gmail = styled.span`
//   margin-left: 53px;
// `;

// const ContactLink = styled.a`
//   color: #bbb;
//   text-decoration: none;
//   transition-duration: 0.2s;

//   &:hover {
//     color: #fff;
//     text-decoration: none;
//   }
// `;

// const SocialMediaList = styled.ul`
//   position: relative;
//   font-size: 22px;
//   text-align: center;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0;
// `;

// const SocialMediaListItem = styled.li`
//   position: relative;
//   display: inline-block;
//   height: 60px;
//   width: 60px;
//   margin: 10px 3px;
//   line-height: 60px;
//   border-radius: 50%;
//   color: #fff;
//   background-color: rgb(27, 27, 27);
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     background-color: #fff;
//   }

//   &:hover:after {
//     opacity: 1;
//     transform: scale(1.12);
//     transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
//   }

//   &:hover ${ContactLink} {
//     color: #000;
//   }
// `;

// const SocialMediaListItemAfter = styled.div`
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 60px;
//   height: 60px;
//   line-height: 60px;
//   border-radius: 50%;
//   opacity: 0;
//   box-shadow: 0 0 0 1px #fff;
//   transition: all 0.2s ease-in-out;
// `;

// const Copyright = styled.div`
//   font: 200 14px 'Oswald', sans-serif;
//   color: #555;
//   letter-spacing: 1px;
//   text-align: center;
// `;

// const Hr = styled.hr`
//   border-color: rgba(255, 255, 255, 0.6);
// `;

// React Components
const ContactPage = () => {
  return (
    <Section>
      {/* <ContactHeader>Contact</ContactHeader>
      <ContactWrapper>
        <Form id="contact-form" className="form-horizontal" role="form">
          <FormControl>
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
            </div>
          </FormControl>
          <FormControl>
            <div className="col-sm-12">
              <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
            </div>
          </FormControl>
          <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
          <SendButton className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <AltSendButton className="alt-send-button">
              <i className="fa fa-paper-plane"></i>
              <ContactText className="send-text">SEND</ContactText>
            </AltSendButton>
          </SendButton>
        </Form>
        <DirectContactContainer>
          <ContactList className="contact-list">
            <ListItem className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <Place className="contact-text place">City, State</Place>
              </i>
            </ListItem>
            <ListItem className="list-item">
              <i className="fa fa-phone fa-2x">
                <Phone className="contact-text phone">
                  <ContactLink href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</ContactLink>
                </Phone>
              </i>
            </ListItem>
            <ListItem className="list-item">
              <i className="fa fa-envelope fa-2x">
                <Gmail className="contact-text gmail">
                  <ContactLink href="mailto:#" title="Send me an email">hitmeup@gmail.com</ContactLink>
                </Gmail>
              </i>
            </ListItem>
          </ContactList>
          <Hr />
          <SocialMediaList className="social-media-list">
            <SocialMediaListItem>
              <ContactLink href="#" target="_blank">
                <i className="fa fa-github" aria-hidden="true"></i>
              </ContactLink>
              <SocialMediaListItemAfter></SocialMediaListItemAfter>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <ContactLink href="#" target="_blank">
                <i className="fa fa-codepen" aria-hidden="true"></i>
              </ContactLink>
              <SocialMediaListItemAfter></SocialMediaListItemAfter>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <ContactLink href="#" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </ContactLink>
              <SocialMediaListItemAfter></SocialMediaListItemAfter>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <ContactLink href="#" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </ContactLink>
              <SocialMediaListItemAfter></SocialMediaListItemAfter>
            </SocialMediaListItem>
          </SocialMediaList>
          <Hr />
          <Copyright>&copy; ALL OF THE RIGHTS RESERVED</Copyright>
        </DirectContactContainer>
      </ContactWrapper> */}
    </Section>
  );
};

export default ContactPage;
