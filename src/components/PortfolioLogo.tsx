import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export default function PortfolioLogo() {
  return (
    <Container>
      <Logo>MyPortfolio</Logo>
    </Container>
  );
}
