import styled, { css } from 'styled-components';

export const ProfileBG = styled.div`
  height: 300px;
  background-image: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  margin-top: -30px;
`;
export const UserPicWrapper = styled.div`
  /* position: relative; */
`;
export const EditContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

const normalPosition = css`
  top: -120px;
`;

const centerPosition = css`
  bottom: 0;
`;

export const UserPic = styled.div`
  border: 10px solid white;
  position: absolute;
  display: flex;
  transition: all 0.6s ease;
  ${({ upperPosition }) => (upperPosition ? centerPosition : normalPosition)}
`;
