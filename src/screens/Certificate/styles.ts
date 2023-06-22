import styled, { css } from 'styled-components/native';
import { ThemeStyles } from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: #251e21;
`;

export const HeaderArea = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 80px;
`;

export const HeaderTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const BodyArea = styled.View`
  flex: 1;
  justify-content: center;
  margin-bottom: 20px;
`;
