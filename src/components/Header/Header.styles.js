import styled from 'styled-components';

export const CustomHeader = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border-bottom: 0.5px solid ${({ theme }) => theme.mainBorderColor};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftHeaderWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const RightHeaderWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
