import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.primary};
    padding-top: 15px;
    padding-bottom: 15px;
  `}
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #ccc;
  margin: 5px;
`;
export const EnableDot = styled.View`
  ${({ theme }) => css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${theme.colors.textColor};
    margin: 5px;
  `}
`;

export const CardItem = styled.View`
  ${({ theme }) => css``}
`;
export const TextArea = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-size: ${theme.sizes.fontSBig}px;
    margin-left: 5px;
    text-align: center;
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-size: ${theme.sizes.fontSMedium}px;
    margin-top: 8px;
  `}
`;
export const WelcomeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-size: ${theme.sizes.fontSSmall}px;
    margin-top: 8px;
  `}
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
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.textColor};
    padding: 10px;
    border-radius: 10px;
  `}
`;

export const KnowMoreButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.sizes.fontSMedium}px;
    color: ${theme.colors.textColor};
  `}
`;
