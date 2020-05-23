import styled from 'styled-components';

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
export const UserPic = styled.div`
  border: 10px solid white;
  position: absolute;
  display: flex;
  top: -120px;
`;
