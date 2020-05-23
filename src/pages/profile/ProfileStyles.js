import styled from 'styled-components';
import variables from 'styles/variables';

export const ProfileBG = styled.div`
  height: 370px;
  background-image: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  margin-top: -30px;
`;
