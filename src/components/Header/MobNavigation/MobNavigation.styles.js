import styled from 'styled-components';
import { mobile } from 'utils/adaptiveMixins.js/adaptiveMixin';

export const MobileNavBtn = styled.button`
  display: none;
  border: none;
  background: transparent;

  & > svg {
    width: 30px;
    height: 30px;
  }

  ${mobile`
     display: block;
  `}
`;

export const MobileNavMenu = styled.div`
  position: fixed;
  z-index: 7;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

export const CloseBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const CloseButton = styled.button`
  background: transparent;
  margin-left: auto;
  border: none;

  & > svg {
    width: 30px;
    height: 30px;
  }
`;

export const MobNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
