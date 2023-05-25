import styled from 'styled-components';
import { mobile } from 'utils/adaptiveMixins.js/adaptiveMixin';

export const OrderHistoryMain = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border: 0.5px solid ${({ theme }) => theme.mainBorderColor};
  border-radius: 20px;
  flex: 1;
  min-height: 75vh;

  ${mobile`
    padding: 10px;
  `}
`;

export const OrderTitle = styled.h1`
  text-align: center;
  font-size: 32px;
`;

export const OrderList = styled.ul`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.storeCartListBackground};

  ${mobile`
    grid-template-columns: repeat(1, 1fr);
  `}
`;
export const OrderItem = styled.li`
  text-align: center;
`;
