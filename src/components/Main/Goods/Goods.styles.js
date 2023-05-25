import styled from 'styled-components';
import { mobile } from 'utils/adaptiveMixins.js/adaptiveMixin';

export const CustomGoodsSection = styled.section`
  flex: 2;
  padding: 15px;
  max-height: 73vh;
  overflow: scroll;
  overflow-x: hidden;
`;

export const CustomGoodsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 15px;

  ${mobile`
    grid-template-columns: repeat(1, 1fr);
  `}
`;
