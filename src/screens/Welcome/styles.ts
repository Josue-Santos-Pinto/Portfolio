import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #ccc;
  margin: 5px;
`;
export const EnableDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #333;
  margin: 5px;
`;

export const CardItem = styled.View``;
export const TextArea = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const Title = styled.Text`
  color: #333;
  font-size: 40px;
  margin-left: 5px;
  text-align: center;
`;
export const SubTitle = styled.Text`
  color: #333;
  font-size: 20px;
  margin-top: 8px;
`;
export const WelcomeText = styled.Text`
  color: #333;
  font-size: 15px;
  margin-top: 8px;
`;

export const LottieArea = styled.View`
  width: 100%;
  height: 55%;
  min-height: 250px;
  justify-content: center;
  align-items: center;
`;

export const KnowMoreButtonArea = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const KnowMoreButton = styled.TouchableOpacity`
  border: 1px solid #333;
  padding: 10px;
  border-radius: 10px;
`;

export const KnowMoreButtonText = styled.Text`
  font-size: 20px;
  color: #333;
`;
