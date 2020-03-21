import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 400px) {
    width: 80vw;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
