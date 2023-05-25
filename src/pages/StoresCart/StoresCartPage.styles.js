import styled from 'styled-components';
import { mobile } from 'utils/adaptiveMixins.js/adaptiveMixin';

export const MainStoreCart = styled.main`
  width: 100%;
  display: flex;
  padding: 0 30px;
  gap: 30px;
  margin-top: 20px;

  ${mobile`
    padding: 0px;
  `}
`;
