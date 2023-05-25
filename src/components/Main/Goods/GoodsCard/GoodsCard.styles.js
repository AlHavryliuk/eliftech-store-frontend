import styled from 'styled-components';
import svg from '../../../../images/symbol-defs.svg';

export const CustomGoodsCard = styled.li`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

export const CustomImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;
export const CustomInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
`;

export const CustomInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoodsName = styled.span``;

export const GoodsPrice = styled.span`
  display: flex;
  flex-wrap: nowrap;
`;

export const CustomButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const GoodsButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
  }
`;

export const GoodsRemoveBtn = styled.button`
  width: 40px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  background-image: url(${svg}#icon-garbage);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
  }

  & > svg {
    width: 15px;
    height: 15px;
  }
`;
export const CustomCountWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;
export const CustomCountButton = styled.button`
  padding: 2px 7px;
  font-size: 20px;
`;
export const CustomCountValue = styled.span`
  padding: 5px;
`;
