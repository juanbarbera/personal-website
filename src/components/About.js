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
  width: 100%;
  margin-top: 10vh;
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
      blueWord.addEventListener("mouseover", () => {
        blueWord.classList.add('stay-blue')
        setTimeout(() => {
          blueWord.classList.remove('stay-blue')
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
    <div id="description-section">
          <div id="description-text" >
            <span className="neon-blue-active">Hello,</span> <span className="neon-pink-active">I'm</span> <span className="neon-yellow-active">Juan</span> <span className="neon-blue-active">Barbera </span><span className="neon-pink-active">Filho.</span>  <br/>
            <span className="neon-yellow-active">I'm </span><span className="neon-blue-active">a </span><span className="neon-pink-active">Front-</span><span className="neon-yellow-active">End </span><span className="neon-blue-active">Developer </span><span className="neon-pink-active">looking </span><span className="neon-yellow-active">for </span><span className="neon-blue-active">my </span><span className="neon-pink-active">first </span><span className="neon-yellow-active">opportunity.</span><br/>
            <span className="neon-blue-active">I </span><span className="neon-pink-active">was </span><span className="neon-yellow-active">born </span><span className="neon-blue-active">in </span><span className="neon-pink-active">Brazil </span><span className="neon-yellow-active">and </span><span className="neon-blue-active">gained </span><span className="neon-pink-active">Portuguese </span><span className="neon-yellow-active">citizenship </span><span className="neon-blue-active">last </span><span className="neon-pink-active">year.</span><br/>
            <span className="neon-yellow-active">Currently, </span><span className="neon-blue-active">I </span><span className="neon-pink-active">live </span><span className="neon-yellow-active">in </span><span className="neon-blue-active">the </span><span className="neon-pink-active">South </span><span className="neon-yellow-active">of </span><span className="neon-blue-active">Belgium, </span><span className="neon-pink-active">near </span><span className="neon-yellow-active">Luxembourg, </span><span className="neon-blue-active">where </span><span className="neon-pink-active">I </span><span className="neon-yellow-active">continue </span><span className="neon-blue-active">to </span><span className="neon-pink-active">evolve </span><span className="neon-yellow-active">my </span><span className="neon-blue-active">skills </span><span className="neon-pink-active">every </span><span className="neon-yellow-active">day.</span>
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