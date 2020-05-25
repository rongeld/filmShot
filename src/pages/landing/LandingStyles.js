import styled from 'styled-components';
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
`;
export const Body = styled.div`
  display: flex;
  height: 100%;
`;
export const FromWrapper = styled.div`
  max-width: 572px;
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
  width: 80%;
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

  & > div {
    margin-bottom: 20px;
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
`;
