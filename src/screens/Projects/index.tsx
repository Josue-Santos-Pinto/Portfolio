import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { SkillItem } from '../../components/SkillItem';
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
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <S.HeaderArea>
          <S.HeaderTitle>Principais Projetos</S.HeaderTitle>
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
