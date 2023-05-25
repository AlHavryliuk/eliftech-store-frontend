import styled from 'styled-components';

export const HeaderSuccessWrapper = styled.div`
  width: 250px;
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;

export const HeaderSuccessName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.subTextColor};
  background-color: ${({ theme }) => theme.buttonType1BackgroundColor};
  border-radius: 10px;
  flex: 2;
`;

export const HeaderLogout = styled.button`
  flex: 1;
  border: none;
  border-radius: 10px;
  border-left: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  background-color: ${({ theme }) => theme.buttonType1BackgroundColor};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBtnColor};
    color: ${({ theme }) => theme.hoverTextColor};
    fill: ${({ theme }) => theme.hoverTextColor};
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;
