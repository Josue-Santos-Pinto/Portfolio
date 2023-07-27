import styled from 'styled-components/native';

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
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding-vertical: 20px;
`;
export const InputArea = styled.View`
  width: 90%;
  align-items: center;
  margin-bottom: 10px;
`;

export const SmallInput = styled.TextInput`
  width: 90%;
  height: 40px;
  background-color: #ccc;
  border-radius: 8px;
  padding: 10px;
  color: #000;
`;

export const BigInput = styled.TextInput`
  width: 90%;
  min-height: 120px;
  background-color: #ccc;
  border-radius: 8px;
  padding: 10px;
  color: #000;
`;
export const SendButton = styled.TouchableOpacity`
  width: 90%;
  height: 40px;
  background-color: blue;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
export const SendButtonText = styled.Text`
  color: #fff;
`;
export const ErrorMessage = styled.Text`
  color: red;
`;

export const Shadow = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const AlertBox = styled.View`
  width: 70%;
  height: 30%;
  border-radius: 10px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
export const AlertText = styled.Text`
  color: #000;
  margin-top: 5px;
`;
