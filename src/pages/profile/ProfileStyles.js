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
  @media screen and (max-width: 900px) {
    height: 150px;
  }
`;
export const UserPicWrapper = styled.div`
  /* position: relative; */

  @media screen and (max-width: 900px) {
    position: absolute;
  }
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

  @media screen and (max-width: 900px) {
    bottom: 0px;
    width: 100px;
    height: 100px;
    top: auto;
    border: 3px solid white;
  }
`;
