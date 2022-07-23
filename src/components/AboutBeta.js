import styled, { keyframes } from 'styled-components';

import { TopNavigation } from './TopNavigation'; 
import { BottomNavigation } from './BottomNavigation'; 

const Background = styled.section`
  height: 90vh;
  width: 100vw;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const terminal = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 125px;
  top: 50%;
  font-size: 1.8rem;
  position: relative;
  text-align: center;
  border-right: 15px solid rgba(156,156,156,0.7);
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  animation: ${terminal} 3s steps(7) 1s 1 normal both;
  transform: translateY(-50%);
`;

export const AboutBeta = () => {
  return (
    <>
    <TopNavigation />
    <BottomNavigation />
    <Background>
      <Text id="welcome">
        Welcome
      </Text>
    </Background>
    </>
    )
}