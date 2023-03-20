import React from 'react';
import { ScrollView } from 'react-native';
import { SkillItem } from '../../components/SkillItem';
import * as S from './styles';

import * as Animatable from 'react-native-animatable';

const iconSkills = [
  { name: 'logo-html5', color: 'red' },
  { name: 'logo-css3', color: 'blue' },
  { name: 'logo-javascript', color: 'yellow' },
  { name: 'logo-react', color: 'purple' },
  { name: 'logo-nodejs', color: 'green' },
];
const materialIconSkills = [
  { name: 'database', color: 'grey' },
  { name: 'git', color: 'red' },
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
