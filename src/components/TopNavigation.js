import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  @media (max-width: 1025px) {
    position: absolute;
    padding: 5vh 0;
    height: 15vh;
  }
`;

const NavigationWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const Icon = styled.div`
  @media (max-width: 1025px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  justify-content: center;
  align-items: center;
  transition: all 0.17s ease-out;
  font-weight: 700;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.5em;
  text-decoration: none;
  color: white;
  :hover {
    color: ${props => props.color};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoNameWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoName = styled.div`
  letter-spacing: 1.7px;
  font-weight: 700;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.5em;
  line-height: 1;
`;

const NeonBlue = styled.span`
  color: #099fff;
`;

const NeonPink = styled.span`
  color: #ff0099;
`;

const NeonYellow = styled.span`
  color: #f2ea02;
`;

const Website = styled.div`
  letter-spacing: 3px;
  font-weight: 300;
  font-family: "Bebas Neue", sans-serif;
  font-size: 0.7em;
`;

export const TopNavigation = () => {
  return (
    <Background>
      <NavigationWrapper>
        <Icon>
          <NavLink to="/" color="#099fff">About Me</NavLink>          
        </Icon>
          <NavLink to="/" color="white">
            <Logo>
              <LogoNameWrapper>
                <LogoName>
                  <NeonBlue>Juan</NeonBlue><NeonPink>Barbera</NeonPink><NeonYellow>Filho's</NeonYellow>
                </LogoName>
                <Website>website</Website>
              </LogoNameWrapper>
            </Logo>
          </NavLink>
        <Icon>
          <NavLink to="/portfolio" color="#ff0099">Portfolio</NavLink>
        </Icon>
      </NavigationWrapper>
    </Background>
  );
};