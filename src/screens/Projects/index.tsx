import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, Text } from 'react-native';
import * as S from './styles';
import database from '@react-native-firebase/database';
import { ProjectItem } from '../../components/ProjectItem';

export function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    database()
      .ref('/projects')
      .on('value', (snapshot) => {
        setProjects(snapshot.val());
        setLoading(false);
      });
  }, []);
  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.HeaderArea>
          <Text style={{ fontFamily: 'Sriracha-Regular', fontSize: 25 }}>Projetos</Text>
        </S.HeaderArea>
        <S.BodyArea>
          {projects.length > 0 && loading == false ? (
            projects.map((item, key) => <ProjectItem key={key} data={item} />)
          ) : (
            <S.LoadingArea>
              <ActivityIndicator size="large" color="#fff" />
            </S.LoadingArea>
          )}
        </S.BodyArea>
      </ScrollView>
    </S.Container>
  );
}
