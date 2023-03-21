import styled, { css } from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import { ThemeStyles } from '../../styles';

const statuBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
  flex: 1;
  background-color: ${ThemeStyles.colors.bg};
  padding-top: ${Platform.OS === 'android' ? statuBarHeight : 25}px;
`;
export const Scroller = styled.ScrollView``;

export const HeaderArea = styled.View`
  width: 100%;
  min-height: 280px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  padding-vertical: 30px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;
export const HeaderSubTitle = styled.Text`
  color: #fff;
  font-size: 15px;
`;
export const AboutItem = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const AboutItemInfoName = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
`;
export const AboutItemInfoArea = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  padding-horizontal: 20px;
`;
export const AboutItemInfoLabel = styled.Text`
  color: #000;
  font-size: 15px;
`;
export const AboutItemInfoValue = styled.Text`
  color: #000;
  font-size: 15px;
`;

export const ButtonArea = styled.TouchableOpacity`
  width: 300px;
  height: 60px;
  border-radius: 10px;
  background-color: #5ac2d1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: -10px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
