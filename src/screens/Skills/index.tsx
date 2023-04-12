import React from 'react';
import { ScrollView } from 'react-native';
import { SkillItem } from '../../components/SkillItem';
import * as S from './styles';

const iconSkills = [
  { name: 'logo-html5', color: '#e9642a' },
  { name: 'logo-css3', color: '#0085c4' },
  { name: 'logo-javascript', color: '#f7c327' },
  { name: 'logo-react', color: '#423170' },
  { name: 'logo-firebase', color: '#f7c52a' },
];
const materialIconSkills = [
  { name: 'database', color: 'grey' },
  { name: 'git', color: '#e84d31' },
];

export function Skills() {
  return (
    <S.Container>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <S.HeaderArea>
          <S.HeaderTitle>Tecnologias</S.HeaderTitle>
        </S.HeaderArea>
        <S.BodyArea>
          {iconSkills.map((item, key) => (
            <SkillItem key={key} data={item} />
          ))}
          {materialIconSkills.map((item, key) => (
            <SkillItem key={key} data={item} />
          ))}
        </S.BodyArea>
      </ScrollView>
    </S.Container>
  );
}
