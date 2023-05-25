import styled from 'styled-components';
import { mobile } from 'utils/adaptiveMixins.js/adaptiveMixin';

export const MainStores = styled.main`
  width: 100%;
  display: flex;
  padding: 0 30px;
  gap: 30px;
  margin-top: 20px;

  ${mobile`
    flex-direction: column;
  `}
`;

export const Stores = styled.section`
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border-radius: 20px;
  flex: 1;
  height: 70vh;
  border: 0.5px solid ${({ theme }) => theme.mainBorderColor};
`;
