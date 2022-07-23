import styled from 'styled-components';
import { TopNavigation } from './TopNavigation'; 
import { BottomNavigation } from './BottomNavigation'; 

import ComputerIcon from '@mui/icons-material/Computer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './About.css';

const StackAndSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5vh;
`;

const ContactWrapper = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 15vh;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .25s;


  font-family: "Bebas Neue", sans-serif;
  @media (min-width: 750px) {
    font-size: 2.25em;
  }
  @media (min-width: 1025px) {
    font-size: 2.5em;
    padding-bottom: 0;
    height: 60vh;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Dosis", sans-serif;
  font-weight: 700;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5vh;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  overflow-wrap: break-word;
`;

const ContactInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 806px) {
    flex-direction: row;
  }
`;

const ContactInfoDetailSpec = styled.div`
  /* padding-left: 0; */
  font-size: .8em;
  padding: 10px 0 20px 0;
  @media (min-width: 806px) {
    padding: 0 0 0 15px;
  }
`;

export const About = () => {
  return (
    <>
    <TopNavigation />
    <BottomNavigation />
    <div id="welcome-section">Welcome</div>
    <div id="description-section">
          <div id="description-text">
            I am a self-taught front-end developer specialized in React with a basic understanding of back-end as well. I am passionate about technology, particularly software and mechanical engineering. Also, I base the code I write on the foundations of the school of thought from the book "Clean Code" by Robert C. Martin. I love how powerful programming is, how much can be done just by essentially typing into a keyboard.
          </div>
      </div>      
      <div id="stack">
        <StackAndSkills>
        <ComputerIcon/> 
        <div id="stack-header">Stack and Skills:</div>
        </StackAndSkills>
          <ol>
            <div>HTML | CSS</div>
            <div>JavaScript | Typescript</div>            
            <div>React | Redux</div>
            <div>Jest | Testing & Debugging</div>
            <div>MaterialUI | Bootstrap | Semantic UI</div>
            <div>React-Router | Axios | Swiper</div>
            <div>Node | Express | Mongoose</div>
            <div>NoSQL | MongoDB</div>            
            <div>Python Fundamentals</div>
            <div>Git | Github</div> 
            <div>Intermediate Photoshop</div> 
          </ol>
      </div>

      <ContactWrapper>
        <Contact>
          <AccountCircleIcon />
          <div id="contact-header">Contact</div>
        </Contact>
        <ContactInfo>
          <ContactInfoDetail><div>Phone: </div><ContactInfoDetailSpec>+32 0470619039</ContactInfoDetailSpec></ContactInfoDetail>
          <ContactInfoDetail><div>Email: </div><ContactInfoDetailSpec>jbarberafilho@outlook.com</ContactInfoDetailSpec></ContactInfoDetail>
          <ContactInfoDetail><div>Linkedin: </div><ContactInfoDetailSpec>linkedin.com/in/juanbarberafilho</ContactInfoDetailSpec></ContactInfoDetail>
          <ContactInfoDetail><div>GitHub: </div><ContactInfoDetailSpec>github.com/juanbarbera</ContactInfoDetailSpec></ContactInfoDetail>
        </ContactInfo>
      </ContactWrapper>

    </>
  )
};