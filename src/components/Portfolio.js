import { useState } from 'react';
import styled from 'styled-components';
import { TopNavigation } from './TopNavigation';
import { BottomNavigation } from './BottomNavigation';
import Button from '@mui/material/Button';

import apiRedux from '../assets/images/api-redux.jpg';
import garra from '../assets/images/garra.jpg';
import plateletCalc from '../assets/images/plateletCalc.jpg';
import robots from '../assets/images/robot-store-print.jpg';
import plateletCalcReact from '../assets/images/platelet-calc-react.jpg';

const Background = styled.section`
  background-color: white;
  @media (max-width: 1025px) {
    padding-bottom: 12vh;
  }
`;

const Container = styled.div`
  margin: 0 5vw;
`;

const PortfolioSection = styled.section`
  width: 100%;
  margin-top: 12vh;
  @media (min-width: 821px) {
    margin-top: 10vh;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  @media (max-width: 1250px) {
    text-align: center;
  }
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
      color: #cccccc;
    }
  }
`;

// <Project>Background and <Project>Body

const ModalBackground = styled.div`
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

const ModalBody = styled.div`
  height: auto;
  width: 80vw;
  margin: 2vh auto;
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
  margin-bottom: 4vh;
  @media (min-width: 1025px) {
    margin: 0;
  }
`;

const ModalImageAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-gap: 20px;
  }
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
    margin-top: 3%;
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
    margin: 4% 0 3% 0;
  }
`;

const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1250px) {
    flex-direction: row;
  }
`;

const ModalButton = styled(Button)`
  && {
    font-size: 1em;
    background-color: black;
    color: white;
    width: 65%;
    transition: all .3s;
    margin: ${props => props.repository ? '3% 0' : 'auto'};
    :hover {
      background-color: ${props => props.fontcolor};
      color: white;
    }
    @media (min-width: 1025px) {
      width: 200px;
    }
  }
`;

export const Portfolio = () => {
  const [plateletReactShouldShow, setPlateletReactShouldShow] = useState(false);
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
            <ProjectTitle>Platelet Calculator - React</ProjectTitle>
            <ProjectImage src={plateletCalcReact} />
            <ProjectButton onClick={() => setPlateletReactShouldShow(!plateletReactShouldShow)}>discover</ProjectButton>
          </Project>
          <Project>
            <ProjectTitle>Luxembourg Robots</ProjectTitle>
            <ProjectImage src={robots} />
            <ProjectButton onClick={() => setRobotModalShouldShow(!robotModalShouldShow)}>discover</ProjectButton>
          </Project>
          <Project>
            <ProjectTitle>API with React/Redux</ProjectTitle>
            <ProjectImage src={apiRedux} />
            <ProjectButton onClick={() => setApiReduxModalShouldShow(!apiReduxModalShouldShow)}>discover</ProjectButton>
          </Project>
          <Project>
            <ProjectTitle>Garra Website</ProjectTitle>
            <ProjectImage src={garra} />
            <ProjectButton onClick={() => setGarraModalShouldShow(!garraModalShouldShow)}>discover</ProjectButton>
          </Project>
          <Project>
            <ProjectTitle>Platelet Calculator</ProjectTitle>
            <ProjectImage src={plateletCalc} />
            <ProjectButton onClick={() => setPlateletModalShouldShow(!garraModalShouldShow)}>discover</ProjectButton>
          </Project>
        </Grid>
      </PortfolioSection>
    </Container>

    <ModalBackground open={plateletReactShouldShow} onClick={() => setPlateletReactShouldShow(false)}>
      <ModalBody onClick={e => e.stopPropagation()}>
        <ModalTitle>Platelet Calcultar - Revised (React)</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={plateletCalcReact}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              Revision of my first web app "Platelet Calculator" in React. It's made with a more efficient interface for both desktop and mobile, especially desktop since all the information is available without the need to scroll. It uses useState to handle most data, its components are made with styled components, and has customized components from Material UI.
            </ModalDescription> 
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalButtons>
          <ModalButton fontcolor="#ff0099" onClick={() => setPlateletReactShouldShow(false)}>Close</ModalButton>
          <ModalButton repository={true} fontcolor="#099fff" href="https://github.com/juanbarbera/robots-store" target="_blank">Repository</ModalButton>
          <ModalButton fontcolor="#099fff" href="https://robot-store.herokuapp.com/" target="_blank">Open App</ModalButton>
        </ModalButtons>
      </ModalBody>
    </ModalBackground>

    <ModalBackground open={robotModalShouldShow} onClick={() => setRobotModalShouldShow(false)}>
      <ModalBody onClick={e => e.stopPropagation()}>
        <ModalTitle>Luxembourg Robots</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={robots}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              Full Stack Web App of a fictitious robot store built in React, with backend in Node connected to a MongoDB Atlas database. It's possible to view, add, and delete robots. The app is both responsive and adaptive, since its components are responsive to all screen sizes, while displaying different components in accordance with the viewport width for a better user interface.
            </ModalDescription> 
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalButtons>
          <ModalButton fontcolor="#ff0099" onClick={() => setRobotModalShouldShow(false)}>Close</ModalButton>
          <ModalButton repository={true} fontcolor="#099fff" href="https://github.com/juanbarbera/robots-store" target="_blank">Repository</ModalButton>
          <ModalButton fontcolor="#099fff" href="https://robot-store.herokuapp.com/" target="_blank">Open App</ModalButton>
        </ModalButtons>
      </ModalBody>
    </ModalBackground>

    <ModalBackground open={apiReduxModalShouldShow} onClick={() => setApiReduxModalShouldShow(false)}> 
      <ModalBody onClick={e => e.stopPropagation()}>
      <ModalTitle>API practice with React and Redux</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={apiRedux}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              React and Redux app which consumes 4 API's. A Brazilian car plate search, a Brazilian zip code search, a currency exchange rate in Euros, American Dollars, and Brazilian Reais, and a cryptocurrency share price. The data received using the API's is stored as state with Redux with the help of Redux Thunk. The app is available in English, French and Portuguese.
            </ModalDescription>                     
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalButtons>
          <ModalButton fontcolor="#ff0099" onClick={() => setApiReduxModalShouldShow(false)}>Close</ModalButton>
          <ModalButton repository={true} fontcolor="#099fff" href="https://github.com/juanbarbera/apiredux/tree/master" target="_blank">Repository</ModalButton>
          <ModalButton fontcolor="#099fff" href="https://api-react-eight.vercel.app/" target="_blank">Open App</ModalButton>
        </ModalButtons>
      </ModalBody>
    </ModalBackground>

    <ModalBackground open={garraModalShouldShow} onClick={() => setGarraModalShouldShow(false)}> 
      <ModalBody onClick={e => e.stopPropagation()}>
      <ModalTitle>Garra Website</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={garra}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              This website is a prototype I developed for a team of streamers called Garra. It was made in the beginning of my learning journey and contains visual elements related to the brand, smooth transitions, and a sober aspect.
            </ModalDescription>                   
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalButtons>
          <ModalButton fontcolor="#ff0099" onClick={() => setGarraModalShouldShow(false)}>Close</ModalButton>
          <ModalButton repository={true} fontcolor="#099fff" href="https://github.com/juanbarbera/garra.tv" target="_blank">Repository</ModalButton>
          <ModalButton fontcolor="#099fff" href="https://juanbarbera.github.io/garra.tv/" target="_blank">Open App</ModalButton>
        </ModalButtons>
      </ModalBody>
    </ModalBackground>

    <ModalBackground open={plateletModalShouldShow} onClick={() => setPlateletModalShouldShow(false)}> 
      <ModalBody onClick={e => e.stopPropagation()}>
      <ModalTitle>Platelet Calculator</ModalTitle>
        <ModalImageAndDescription> 
          <Centralizer>
            <ModalImage src={plateletCalc}/>
          </Centralizer> 
          <ModalDescriptionAndLink>
            <ModalDescription>
              Medical tool Dr. Albiero allowed me to develop the web app version. This calculator was previously only available for android. It is simples in design and uses plain HTML, CSS, and JavaScript, the main functionality is the calculation using Albiero's formula. This app was my first project and although it is simples it was a especially good exercise because the original code was written in Java.
            </ModalDescription>                    
          </ModalDescriptionAndLink>
        </ModalImageAndDescription>
        <ModalButtons>
          <ModalButton fontcolor="#ff0099" onClick={() => setPlateletModalShouldShow(false)}>Close</ModalButton>
          <ModalButton repository={true} fontcolor="#099fff" href="https://github.com/juanbarbera/platelet-calculator" target="_blank">Repository</ModalButton>
          <ModalButton fontcolor="#099fff" href="https://juanbarbera.github.io/platelet-calculator/index.html" target="_blank">Open App</ModalButton>
        </ModalButtons>
      </ModalBody>
    </ModalBackground>

    </Background>
    </>
  )
}