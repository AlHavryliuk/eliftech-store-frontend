import styled from 'styled-components';

export const AuthWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const Login = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  border: none;

  background-color: ${({ theme }) => theme.buttonType1BackgroundColor};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
    fill: ${({ theme }) => theme.hoverTextColor};
  }
`;
export const SignIn = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  border: none;

  background-color: ${({ theme }) => theme.buttonType1BackgroundColor};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
    fill: ${({ theme }) => theme.hoverTextColor};
  }
`;
