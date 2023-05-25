import styled from 'styled-components';

export const OrderPopupBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

export const OrderBody = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  background-color: white;
`;

export const OrderForm = styled.div`
  margin-top: 20px;
  & > form {
    display: flex;
    flex-direction: column;

    gap: 20px;

    & label {
      display: flex;
      align-items: center;
      text-align: center;
      flex: 1;
      color: ${({ theme }) => theme.subTextColor};
    }

    & input {
      text-align: center;
      padding: 10px;
      flex: 2;
    }

    & > .submit-button {
      margin-top: 20px;
    }
  }
`;

export const OrderTitle = styled.h1`
  text-align: center;
  margin-top: 15px;
  color: ${({ theme }) => theme.subTextColor};
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const OrderCloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const OrderCloseButton = styled.button`
  background: transparent;
  margin-left: auto;
  border: none;

  & > svg {
    width: 30px;
    height: 30px;
  }
`;
