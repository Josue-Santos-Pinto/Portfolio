import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #2c2a45;
  padding: 30px;
  align-items: center;
  flex-align: column;
`;
export const ContactTitleArea = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
export const ContactTitle = styled.Text`
  font-size: 30px;
  color: #fff;
`;

export const ContactItem = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  border-radius: 125px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  overflow: hidden;
`;

export const ContactImg = styled.Image`
  width: 70%;
  height: 70%;
`;
