import styled from 'styled-components';

export const CustomAuthPopup = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

export const PopupBody = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 30px;
  background-color: white;
  border-radius: 20px;
`;

export const PopupHeader = styled.div`
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

export const AuthTitle = styled.h1`
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.subTextColor};
`;

export const CustomUseForm = styled.div`
  margin-top: 20px;
  & > form {
    display: flex;
    flex-direction: column;
    gap: 7px;

    & > input {
      text-align: center;
      padding: 10px;

      &.submit-button {
        text-transform: capitalize;
        border: 1px solod black;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.buttonType1BackgroundColor};
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: ${({ theme }) => theme.hoverBtnColor};
          color: ${({ theme }) => theme.hoverTextColor};
          fill: ${({ theme }) => theme.hoverTextColor};
        }
      }
    }
  }
`;
