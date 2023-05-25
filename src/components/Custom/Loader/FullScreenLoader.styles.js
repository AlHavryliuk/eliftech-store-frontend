import styled from 'styled-components';

export const FullScreenBlock = styled.div`
  position: fixed;
  z-index: 8;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;
