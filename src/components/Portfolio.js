import { useState } from 'react';
import styled from 'styled-components';
import { TopNavigation } from './TopNavigation';
import { BottomNavigation } from './BottomNavigation';
import Button from '@mui/material/Button';

import apiRedux from '../assets/images/api-redux.png';
import garra from '../assets/images/garra.png';
import plateletCalc from '../assets/images/plateletCalc.png';
import robots from '../assets/images/robots.png';

const Background = styled.section`
  background-color: white;
  min-height: 90vh;
  @media (max-width: 1025px) {
    padding-bottom: 12vh;
  }
`;

const Container = styled.div`
  margin: 0 5vw;
`;

const PortfolioSection = styled.section`
  width: 100%;
  margin-top: 9.5vh;
`;

const Grid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-gap: 35px;
  @media (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-gap: 20px;
  }
  @media (min-width: 1035px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Project = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1250px) {
    width: 350px;
    height: 350px;
  }
`;

const ProjectTitle = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  letter-spacing: 2px;
`;

const ProjectImage = styled.img`
  height: 60%;
  width: 100%;
  object-fit: cover;
`;

const ProjectButton = styled(Button)`
  && {
    margin: 3% 0;
    width: 100%;
    height: 20%;
    transition: all 300ms;
    font-weight: 700;
    font-size: 1.2em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: black;
    color: white;
    :hover {
      font-size: 1.3em;
      background-color: black;
      height: 24%;
      color: white;
    }
  }
`;

// <Project>Background and <Project>Body

const RobotModalBackground = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5); 
`;

const RobotModalBody = styled.div`
  height: auto;
  width: 80vw;
  margin: 10vh 10vw 10vh 10vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (min-width: 1250px) {
    width: 60vw;
    margin: 10vh 20vw 10vh 20vw;
  }
  @media (min-width: 1500px) {
    width: 50vw;
    margin: 10vh 25vw 10vh 25vw;
  }
`;

const ApiReduxModalBackground = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
`;

const ApiReduxModalBody = styled.div`
  height: auto;
  width: 80vw;
  margin: 10vh 10vw 10vh 10vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (min-width: 1250px) {
    width: 60vw;
    margin: 10vh 20vw 10vh 20vw;
  }
  @media (min-width: 1500px) {
    width: 50vw;
    margin: 10vh 25vw 10vh 25vw;
  }
`;

const GarraModalBackground = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
`;

const GarraModalBody = styled.div`
  height: auto;
  width: 80vw;
  margin: 10vh 10vw 10vh 10vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (min-width: 1250px) {
    width: 60vw;
    margin: 10vh 20vw 10vh 20vw;
  }
  @media (min-width: 1500px) {
    width: 50vw;
    margin: 10vh 25vw 10vh 25vw;
  }
`;

const PlateletModalBackground = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
`;

const PlateletModalBody = styled.div`
  height: auto;
  width: 80vw;
  margin: 10vh 10vw 10vh 10vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  @media (min-width: 1250px) {
    width: 60vw;
    margin: 10vh 20vw 10vh 20vw;
  }
  @media (min-width: 1500px) {
    width: 50vw;
    margin: 10vh 25vw 10vh 25vw;
  }
`;

// Common Modal components

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
`;

const ModalImageAndDescription = styled.div`
  display: flex;
  margin: 3vh 0;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Centralizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 100%;
  @media (min-width: 1025px) {
    width: 65%;
    margin-top: 5%;
  }
`;

const ModalDescriptionAndLink = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalDescription = styled.div`
  margin: 15% 0 10% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  @media (min-width: 1025px) {
    margin: 10% 0 5% 0;
  }
`;

const ModalLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`;

const ModalLinksButton = styled(Button)`
  && {
    font-size: 0.8em;
    background-color: black;
    color: white;
    width: 70%;
    margin: 1vh 0;
    transition: all .3s;
    text-align: center;
    :hover {
      background-color: #099fff;
      color: white;
    }
    @media (min-width: 750px) {
      margin: 0 1vh;
    }
    @media (min-width: 1025px) {
      width: 200px;
    }
  }
`;

const ModalCloseAndVisit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ModalCloseButton = styled(Button)`
&& {
    font-size: 1em;
    background-color: black;
    color: white;
    width: 45%;
    transition: all .3s;
    :hover {
      background-color: #ff0099;
      color: white;
    }
    @media (min-width: 1025px) {
      width: 200px;
    }
  }
`;

const ModalVisitButton = styled(Button)`
&& {
    font-size: 1em;
    background-color: black;
    color: white;
    width: 45%;
    transition: all .3s;
    :hover {
      background-color: #099fff;
      color: white;
    }
    @media (min-width: 1025px) {
      width: 200px;
    }
  }
`;

export const Portfolio = () => {
  const [robotModalShouldShow, setRobotModalShouldShow] = useState(false);
  const [apiReduxModalShouldShow, setApiReduxModalShouldShow] = useState(false);
  const [garraModalShouldShow, setGarraModalShouldShow] = useState(false);
  const [plateletModalShouldShow, setPlateletModalShouldShow] = useState(false);

  return (
    <>
    <TopNavigation />
    <BottomNavigation />
    <Background>
    <Container>
      <PortfolioSection>
        <Grid>
          <Project>
            <ProjectTitle>Luxembourg Robots</ProjectTitle>
            <ProjectImage src={robots} />
            <ProjectButton onClick={() => setRobotModalShouldShow(!robotModalShouldShow)}>Learn More</ProjectButton>
          </Project>
          <Project>
            <ProjectTitle>API with React/Redux</ProjectTitle>
            <ProjectImage src={apiRedux} />
            <ProjectButton onClick={() => setApiReduxModalShouldShow(!apiReduxModalShouldShow)}>Learn More</ProjectButton>
          </Project>
          <Project>
            <ProjectTitle>Garra Website</ProjectTitle>
            <ProjectImage src={garra} />
            <ProjectButton onClick={() => setGarraModalShouldShow(!garraModalShouldShow)}>Learn More</ProjectButton>
          </Project>
          <Project>
            <ProjectTitle>Platelet Calculator</ProjectTitle>
            <ProjectImage src={plateletCalc} />
            <ProjectButton onClick={() => setPlateletModalShouldShow(!garraModalShouldShow)}>Learn More</ProjectButton>
          </Project>
        </Grid>
      </PortfolioSection>
    </Container>

    <RobotModalBackground open={robotModalShouldShow} onClick={() => setRobotModalShouldShow(false)}>
      <RobotModalBody onClick={e => e.stopPropagation()}>
        <ModalTitle>Luxembourg Robots</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={robots}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              Full Stack Web App of a fictitious robot store built in React, with backend in C# (ASP.NET). Back-end connected to a MongoDB Atlas database through an azure public API. It's possible to view, add, and delete robots. The app is both responsive and adaptive, since its components are responsive to all screen sizes, while displaying different components in accordance with the viewport width for better layout.
            </ModalDescription> 
            <ModalLinks>
              <ModalLinksButton href="https://github.com/juanbarbera/luxembourgrobots" target="_blank">View Font-end repository</ModalLinksButton>  
              <ModalLinksButton href="https://github.com/juanbarbera/luxembourgrobotsbackend" target="_blank">View back-end repository</ModalLinksButton>  
            </ModalLinks>                     
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalCloseAndVisit>
          <ModalCloseButton onClick={() => setRobotModalShouldShow(false)}>Close</ModalCloseButton>
          <ModalVisitButton href="https://robotsui.vercel.app/" target="_blank">Visit App</ModalVisitButton>
        </ModalCloseAndVisit>
      </RobotModalBody>
    </RobotModalBackground>

    <ApiReduxModalBackground open={apiReduxModalShouldShow} onClick={() => setApiReduxModalShouldShow(false)}> 
      <ApiReduxModalBody onClick={e => e.stopPropagation()}>
      <ModalTitle>API practice with React and Redux</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={apiRedux}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              React and Redux app which consumes 4 API's. A Brazilian car plate search, a Brazilian zip code search, a currency exchange rate in Euros, American Dollars, and Brazilian Reais, and a cryptocurrency share price. The data received using the API's is stored as state with Redux with the help of Redux Thunk. The app is available in English, French and Portuguese.
            </ModalDescription> 
            <ModalLinks>
              <ModalLinksButton href="https://github.com/juanbarbera/apiredux/tree/master" target="_blank">View repository</ModalLinksButton> 
            </ModalLinks>                     
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalCloseAndVisit>
          <ModalCloseButton onClick={() => setApiReduxModalShouldShow(false)}>Close</ModalCloseButton>
          <ModalVisitButton href="https://api-react-eight.vercel.app/" target="_blank">View App</ModalVisitButton>
        </ModalCloseAndVisit>
      </ApiReduxModalBody>
    </ApiReduxModalBackground>

    <GarraModalBackground open={garraModalShouldShow} onClick={() => setGarraModalShouldShow(false)}> 
      <GarraModalBody onClick={e => e.stopPropagation()}>
      <ModalTitle>Garra Website</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={garra}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              This website is a prototype I developed for a team of streamers called Garra. It was made in the beginning of my learning journey and contains visual elements related to the brand, smooth transitions, and a sober aspect.
            </ModalDescription> 
            <ModalLinks>
              <ModalLinksButton href="https://github.com/juanbarbera/garra.tv" target="_blank">view repository</ModalLinksButton> 
            </ModalLinks>                     
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalCloseAndVisit>
          <ModalCloseButton onClick={() => setGarraModalShouldShow(false)}>Close</ModalCloseButton>
          <ModalVisitButton href="https://juanbarbera.github.io/garra.tv/" target="_blank">Visit App</ModalVisitButton>
        </ModalCloseAndVisit>
      </GarraModalBody>
    </GarraModalBackground>

    <PlateletModalBackground open={plateletModalShouldShow} onClick={() => setPlateletModalShouldShow(false)}> 
      <PlateletModalBody onClick={e => e.stopPropagation()}>
      <ModalTitle>Platelet Calculator</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={plateletCalc}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              Medical tool Dr. Albiero allowed me to develop the web app version. This calculator was previously only available for android. It is simples in design and uses plain HTML, CSS, and JavaScript, the main functionality is the calculation using Albiero's formula. This app was my first project and although it is simples it was a especially good exercise because the original code was written in Java.
            </ModalDescription> 
            <ModalLinks>
              <ModalLinksButton href="https://github.com/juanbarbera/platelet-calculator" target="_blank">View repository</ModalLinksButton> 
            </ModalLinks>                     
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalCloseAndVisit>
          <ModalCloseButton onClick={() => setPlateletModalShouldShow(false)}>Close</ModalCloseButton>
          <ModalVisitButton href="https://juanbarbera.github.io/platelet-calculator/index.html" target="_blank">Visit App</ModalVisitButton>
        </ModalCloseAndVisit>
      </PlateletModalBody>
    </PlateletModalBackground>

    </Background>
    </>
  )
}