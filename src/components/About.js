import { useEffect } from 'react';
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
  margin-bottom: 3.5vh;
`;

const ContactWrapper = styled.div`
  height: 60vh;
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
  useEffect(() => {
    const blueWords = document.querySelectorAll('.neon-blue-active');
    blueWords.forEach(blueWord => {
      blueWord.addEventListener("mouseout", () => {
        blueWord.classList.add('from-blue-to-black')
        setTimeout(() => {
          blueWord.classList.remove('from-blue-to-black')
        }, 5000);
      })            
    })

    const pinkWords = document.querySelectorAll('.neon-pink-active');
    pinkWords.forEach(pinkWord => {
      pinkWord.addEventListener("mouseout", () => {
        pinkWord.classList.add('stay-pink')
        setTimeout(() => {
          pinkWord.classList.remove('stay-pink')
        }, 5000);
      })      
    })

    const yellowWords = document.querySelectorAll('.neon-yellow-active');
    yellowWords.forEach(yellowWord => {
      yellowWord.addEventListener("mouseout", () => {
        yellowWord.classList.add('stay-yellow')
        setTimeout(() => {
          yellowWord.classList.remove('stay-yellow')
        }, 5000);
      })      
    })

  }, [])


  return (
    <>
    <TopNavigation />
    <BottomNavigation />
    <div id="welcome-section">Welcome.</div>
    <div id="description-section">
          <div id="description-text">
            <span className="neon-blue-active">I</span> <span className="neon-pink-active">am</span> <span className="neon-yellow-active">a</span> <span className="neon-blue-active">self-taught</span> <span className="neon-pink-active">front-end</span> <span className="neon-yellow-active">developer</span> <span className="neon-blue-active">specialized</span> <span className="neon-pink-active">in</span> <span className="neon-yellow-active">React</span> <span className="neon-blue-active">with</span> <span className="neon-pink-active">a</span> <span className="neon-yellow-active">good</span> <span className="neon-blue-active">understanding</span> <span className="neon-pink-active">of</span> <span className="neon-yellow-active">back-end</span> <span className="neon-blue-active">as</span> <span className="neon-pink-active">well.</span> <span className="neon-yellow-active">I</span> <span className="neon-blue-active">am</span> <span className="neon-pink-active">passionate</span> <span className="neon-yellow-active">about</span> <span className="neon-blue-active">technology,</span> <span className="neon-pink-active">particularly</span> <span className="neon-yellow-active">software</span> <span className="neon-blue-active">and</span> <span className="neon-pink-active">mechanical</span> <span className="neon-yellow-active">engineering.</span> <span className="neon-blue-active">I</span> <span className="neon-pink-active">am</span> <span className="neon-yellow-active">independent</span> <span className="neon-blue-active">but</span> <span className="neon-pink-active">can</span> <span className="neon-yellow-active">also</span> <span className="neon-blue-active">work</span> <span className="neon-pink-active">well</span> <span className="neon-yellow-active">in</span> <span className="neon-blue-active">group</span> <span className="neon-pink-active">activities;</span> <span className="neon-yellow-active">I</span> <span className="neon-blue-active">have</span> <span className="neon-pink-active">experience</span> <span className="neon-yellow-active">with</span> <span className="neon-blue-active">Redux,</span> <span className="neon-pink-active">managing</span> <span className="neon-yellow-active">information</span> <span className="neon-blue-active">between</span> <span className="neon-pink-active">parent</span> <span className="neon-yellow-active">and</span> <span className="neon-blue-active">child</span> <span className="neon-pink-active">components</span> <span className="neon-yellow-active">naturally</span> <span className="neon-blue-active">in</span> <span className="neon-pink-active">multiple</span> <span className="neon-yellow-active">scenarios;</span> <span className="neon-blue-active">and</span> <span className="neon-pink-active">I</span> <span className="neon-yellow-active">base</span> <span className="neon-blue-active">every</span> <span className="neon-pink-active">piece</span> <span className="neon-yellow-active">of</span> <span className="neon-blue-active">code</span> <span className="neon-pink-active">I</span> <span className="neon-yellow-active">write</span> <span className="neon-blue-active">on</span> <span className="neon-pink-active">the</span> <span className="neon-yellow-active">foundations</span> <span className="neon-blue-active">of</span> <span className="neon-pink-active">the</span> <span className="neon-yellow-active">school</span> <span className="neon-blue-active">of</span> <span className="neon-pink-active">thought</span> <span className="neon-yellow-active">from</span> <span className="neon-blue-active">the</span> <span className="neon-pink-active">book</span> <span className="neon-yellow-active">"Clean Code"</span> <span className="neon-blue-active">by</span> <span className="neon-pink-active">Robert</span> <span className="neon-yellow-active">C.</span> <span className="neon-blue-active">Martin.</span> 
          </div>
      </div>      
      <div id="stack">
        <StackAndSkills>
        <ComputerIcon/> 
        <div>Stack and Skills:</div>
        </StackAndSkills>
          <ol>
            <div><span className="neon-yellow-active">HTML | CSS</span></div>
            <div><span className="neon-pink-active">JavaScript</span></div>            
            <div><span className="neon-blue-active">React | Redux</span></div>       
            <div><span className="neon-yellow-active">MaterialUI | Bootstrap | Semantic UI</span></div>
            <div><span className="neon-pink-active">React-Router | Axios | Swiper</span></div>
            <div><span className="neon-blue-active">Node | Express | Mongoose</span></div>
            <div><span className="neon-yellow-active">NoSQL | MongoDB</span></div>            
            <div><span className="neon-pink-active">Python Basics</span></div>
            <div><span className="neon-blue-active">Git | Github</span></div> 
            <div><span className="neon-yellow-active">Intermediate Photoshop</span></div> 
          </ol>
      </div>

      <ContactWrapper>
        <Contact>
          <AccountCircleIcon />
          <div>Contact</div>
        </Contact>
        <ContactInfo>
          <ContactInfoDetail><span className="neon-blue-active"><div>Phone:</div> <div>+32 470619039</div></span></ContactInfoDetail>
          <ContactInfoDetail><span className="neon-pink-active"><div>Email:</div> <div>jbarberafilho@outlook.com</div></span></ContactInfoDetail>
          <ContactInfoDetail><span className="neon-yellow-active"><div>Linkedin:</div> <div>/juanbarberafilho</div></span></ContactInfoDetail>
        </ContactInfo>
      </ContactWrapper>

    </>
  )
};