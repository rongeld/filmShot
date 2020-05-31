import styled, { css } from 'styled-components';

export const ProfileBG = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => (bg ? `url(${bg})` : 'lightgrey')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  width: 290px;
  height: 290px;
  background: ${({ imagUrl }) => (imagUrl ? `url(${imagUrl})` : 'lightgrey')};
  background-position: center;
  background-size: cover;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease;
  ${({ upperPosition }) => (upperPosition ? centerPosition : normalPosition)}
`;
