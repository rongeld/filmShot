import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  border: 10px solid rgba(198, 165, 107, 0.3);
  background: ${({ bg }) => (bg ? `url(${bg})` : 'lightgrey')};
  background-size: cover;
  background-repeat: no-repeat;
  height: 130px;

  & > div {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 60%) scale(2);
    bottom: 0;
  }
`;
export const Quote = styled.div`
  position: relative;
  text-align: center;
  padding: 10px 30px 30px;
`;
