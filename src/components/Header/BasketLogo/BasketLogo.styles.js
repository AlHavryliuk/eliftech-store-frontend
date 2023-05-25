import styled from 'styled-components';
import { mobile } from 'utils/adaptiveMixins.js/adaptiveMixin';

export const CustomBasketLogo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > svg {
    width: 30px;
    height: 30px;
    fill: white;
  }

  ${mobile`
    display: none;
  `}
`;

export const CircleCounte = styled.div`
  border-radius: 50%;
  padding: 5px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.subTextColor};
  background-color: ${({ theme }) => theme.lightModeBtnBackgroundColor};
`;
