import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export default function PortfolioLogo() {
  return (
    <Container>
      <Text style={{ fontFamily: 'RockSalt-Regular', fontSize: 20, color: '#aaa' }}>
        Josué Portfolio
      </Text>
    </Container>
  );
}
