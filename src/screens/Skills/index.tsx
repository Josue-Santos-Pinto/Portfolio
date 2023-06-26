import React from 'react';
import { ScrollView, Text } from 'react-native';
import { SkillItem } from '../../components/SkillItem';
import * as S from './styles';

export function Skills() {
  return (
    <S.Container>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <S.HeaderArea>
          <Text style={{ fontFamily: 'Sriracha-Regular', fontSize: 25, color: '#aaa' }}>
            Tecnologias
          </Text>
        </S.HeaderArea>
        <S.BodyArea>
          <SkillItem area="Mobile" />
          <SkillItem area="Backend" />
        </S.BodyArea>
      </ScrollView>
    </S.Container>
  );
}
