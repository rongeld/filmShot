import styled, { css } from 'styled-components';
import variables from 'styles/variables';

const POSITIONS = {
  'space-between': 'space-between',
  'space-around': 'space-around',
  'flex-start': 'flex-start',
  'flex-end': 'flex-end',
  center: 'center'
};

export const Header = styled.div`
  display: flex;
  height: 79px;
`;
export const MainText = styled.h1`
  color: ${variables['theme-color']};
  font-weight: bolder;
  margin-bottom: 70px;
  margin-top: 10vh;
`;
export const Body = styled.div`
  display: flex;
  height: 100%;
`;
export const FromWrapper = styled.div`
  max-width: 572px;
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
  width: 80%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Col2 = styled.div`
  display: flex;

  & > div:first-child {
    margin-right: 20px;
  }

  & > div {
    flex: 1;
  }
`;
export const SignUpForm = styled.form`
  padding: 42px 100px 50px;

  @media (max-width: 1100px) {
    padding: 10px 20px 30px;
  }

  @media (max-width: 800px) {
    background: rgba(0, 0, 0, 0.7);
  }

  & > div {
    margin-bottom: 20px;
  }

  a {
    text-align: center;
    margin-top: 20px;
    color: ${variables['theme-color']};
  }
`;
export const FormHeader = styled.div`
  background: ${variables['theme-color']};
  color: ${variables.white};
  padding: 20px;

  h2 {
    text-align: center;
    margin: 0;
  }
`;

const hideOnSmallScrn = css`
  @media (max-width: 800px) {
    display: none;
  }
`;
const bgOnSmallScreenStyles = css`
  @media (max-width: 800px) {
    background: ${({ bgOnSmallScreen }) => `url(${bgOnSmallScreen})`};
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 25px;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  background: ${({ invert, bg }) => {
    if (bg) {
      return `url(${bg})`;
    }
    return invert ? variables['theme-color'] : variables.white;
  }};
  background-size: cover;
  background-position: 25%;
  justify-content: ${props => {
    for (const i in props) {
      if (POSITIONS[i]) return i;
    }
  }};

  ${({ hideOnSmallScreen }) => hideOnSmallScreen && hideOnSmallScrn}
  ${({ bgOnSmallScreen }) => bgOnSmallScreen && bgOnSmallScreenStyles}
`;
