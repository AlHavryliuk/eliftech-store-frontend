import styled from 'styled-components';

export const CustomStoreBtn = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
  }
`;

export const CustomStoreCartButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
  }
`;

export const CustomStoreCartCountItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
