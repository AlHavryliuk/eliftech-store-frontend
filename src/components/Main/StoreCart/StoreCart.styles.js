import styled from 'styled-components';
import { mobile } from 'utils/adaptiveMixins.js/adaptiveMixin';

export const CustomStoreCart = styled.div`
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

export const StoreCartTitle = styled.h1`
  text-align: center;
`;

export const StoreCartList = styled.ul`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.storeCartListBackground};
`;

export const CustomStoreCartItem = styled.li`
  text-align: center;
`;

export const StoreResult = styled.span`
  margin-left: auto;
`;

export const StoreClearButton = styled.button`
  margin-left: auto;
  padding: 5px 15px;
  border-radius: 15px;
  border: none;
  background-color: ${({ theme }) => theme.buttonType1Background};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
  }
`;

export const StoreNextButton = styled.button`
  margin-left: auto;
  padding: 5px 15px;
  border-radius: 15px;
  border: none;
  background-color: ${({ theme }) => theme.buttonType1Background};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
  }
`;
