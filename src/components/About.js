import styled from 'styled-components';
import { TopNavigation } from './TopNavigation'; 
import { BottomNavigation } from './BottomNavigation'; 

import ComputerIcon from '@mui/icons-material/Computer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import apiRedux from '../assets/images/api-redux.jpg';
// import garra from '../assets/images/garra.jpg';
// import plateletCalc from '../assets/images/plateletCalc.jpg';
// import robots from '../assets/images/robot-store-print.jpg';
// import plateletCalcReact from '../assets/images/platelet-calc-react.jpg';


import './About.css';

const StackAndSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5vh;
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
  @media (min-width: 750px) {
    font-size: 3.5em;
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
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 5vh;
`;

const ContactInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 806px) {
    flex-direction: row;
  }
`;

export const About = () => {
  return (
    <>
    <TopNavigation />
    <BottomNavigation />
    <div id="welcome-section">Welcome.</div>
    <div id="description-section">
          <div id="description-text">
            I am a self-taught front-end developer specialized in React with a good understanding of back-end as well. I am passionate about technology, particularly software and mechanical engineering. I am independent but can also work well in group activities; I have experience with Redux, managing information between parent and child components naturally in multiple scenarios; and I base every piece of code I write on the foundations of the school of thought from the book "Clean Code" by Robert C. Martin.
          </div>
      </div>      
      <div id="stack">
        <StackAndSkills>
        <ComputerIcon/> 
        <div>Stack and Skills:</div>
        </StackAndSkills>
          <ol>
            <div>HTML | CSS</div>
            <div>JavaScript | Typescript</div>            
            <div>React | Redux</div>
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
          <div>Contact</div>
        </Contact>
        <ContactInfo>
          <ContactInfoDetail><div>Phone:</div> <div>+32 0470619039</div></ContactInfoDetail>
          <ContactInfoDetail><div>Email:</div> <div>jbarberafilho@outlook.com</div></ContactInfoDetail>
          <ContactInfoDetail><div>Linkedin:</div> <div>/juanbarberafilho</div></ContactInfoDetail>
        </ContactInfo>
      </ContactWrapper>

    </>
  )
};