import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { middleLineExtension } from 'utils/animations/sizeAnimations';

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
}
  body {
    font-family: 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.mainTextColor};
    background: ${({ theme }) => theme.bodyBackgroundColor};
  }
  `;

export const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 25px;
  position: relative;
  color: ${({ theme }) => theme.mainTextColor};

  &.active {
    color: ${({ theme }) => theme.activeLinkColor};
  }

  &.blocked {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -10%;
      background-color: white;
      width: 120%;
      height: 2px;

      animation: ${middleLineExtension} 250ms ease-in-out forwards;
    }
  }
`;
