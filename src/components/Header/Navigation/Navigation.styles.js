import styled from 'styled-components';
import { mobile } from 'utils/adaptiveMixins.js/adaptiveMixin';

export const CustomNavigation = styled.nav`
  display: flex;
  gap: 20px;
  
  ${mobile`
    display: none;
  `}
`;
