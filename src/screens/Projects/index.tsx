import React from 'react';
import { ScrollView } from 'react-native';
import { SkillItem } from '../../components/SkillItem';
import * as S from './styles';

import * as Animatable from 'react-native-animatable';
import { ProjectItem } from '../../components/ProjectItem';

const projects = [
  {
    name: 'DevsBarber',
    desc: 'DevsBarber é uma aplicação móvel que permite que os usuários marquem um horário com um cabeleireiro ou barbeiro em um salão de beleza ou barbearia',
    img: require('../../assets/images/projects/DevsBarber.jpg'),
    techs: ['react native'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/DevsBarber' },
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
    img: require('../../assets/images/projects/GuitarStore.jpg'),
    techs: ['react native', 'firebase', 'redux'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/GuitarStore' },
  },
  {
    name: 'Jokenpo',
    desc: 'Jokenpo é uma aplicação que permite que os usuários joguem o clássico jogo de pedra-papel-tesoura em seus dispositivos móveis. Com uma interface de usuário simples e intuitiva, os jogadores podem escolher sua jogada tocando na tela do dispositivo.',
    img: require('../../assets/images/projects/jokenpo.jpeg'),
    techs: ['react native'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/Jokenpo' },
  },
  {
    name: 'App de finanças',
    desc: 'Aplicativo para consultar entradas e saídas de uma conta bancária',
    img: require('../../assets/images/projects/App_Financas.jpg'),
    techs: ['react native'],
    links: { playstore: '', github: 'https://github.com/Josue-Santos-Pinto/App_de_Financas' },
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
