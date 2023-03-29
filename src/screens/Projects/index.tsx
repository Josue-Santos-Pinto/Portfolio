import React from 'react';
import { ScrollView } from 'react-native';
import { SkillItem } from '../../components/SkillItem';
import * as S from './styles';

import * as Animatable from 'react-native-animatable';
import { ProjectItem } from '../../components/ProjectItem';

const projects = [
  {
    name: 'DevsBarber',
    desc: 'Aplicativo para agendamento de cortes de cabelo, unhas, entre outros serviços',
    img: require('../../assets/images/b7_logo.png'),
    techs: ['react native', 'javascript'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/WeatherApp' },
  },
  {
    name: 'WeatherApp',
    desc: 'Aplicativo para consulta de temperatura, retornando informações climáticas e uma foto relacionada a cidade pesquisada',
    img: require('../../assets/images/projects/weather.jpeg'),
    techs: ['react native', 'typescript'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/WeatherApp' },
  },
  {
    name: 'GuitarStore',
    desc: 'E-commerce de guitarras, possuindo uma conta administradora para adicionar produtos ao catálogo',
    img: require('../../assets/images/b7_logo.png'),
    techs: ['react native', 'firebase', 'redux'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/WeatherApp' },
  },
  {
    name: 'Jokenpo',
    desc: 'Mini game conhecido como jokenpo ou pedra, papel, tesoura',
    img: require('../../assets/images/projects/jokenpo.jpeg'),
    techs: ['react native'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/Jokenpo' },
  },
  {
    name: 'App de finanças',
    desc: 'Aplicativo para consultar entradas e saídas de uma conta bancária',
    img: require('../../assets/images/b7_logo.png'),
    techs: ['react native'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/WeatherApp' },
  },
];

export function Projects() {
  return (
    <S.Container>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <S.HeaderArea>
          <S.HeaderTitle>Principais Projetos</S.HeaderTitle>
        </S.HeaderArea>
        <S.BodyArea>
          {projects.map((item, key) => (
            <ProjectItem key={key} data={item} />
          ))}
        </S.BodyArea>
      </ScrollView>
    </S.Container>
  );
}
