import styled from 'styled-components';
import { Button } from '@mui/material';

import FingerprintIcon from '@mui/icons-material/Fingerprint';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  @media (min-width: 1025px) {
    display: none;
  }
`;

const LeftButtom = styled(Button)`
  && {
    width: 50%;
    height: 100%;
    float: left;
    color: white;
    font-size: 1.25em;
    display: flex;
    flex-direction: column;
    line-height: 1.2em;
  }
`;

const RightButtom = styled(Button)`
  && {
    width: 50%;
    height: 100%;
    float: right;
    color: white;
    font-size: 1.25em;
    display: flex;
    flex-direction: column;
    line-height: 1.2em;
  }
`;

export const BottomNavigation = () => {
  return (
    <Background>
      <LeftButtom href="/"><FingerprintIcon />Portfolio</LeftButtom>
      <RightButtom href="/about"><EmojiPeopleIcon />About Me</RightButtom>
    </Background>
  )
}