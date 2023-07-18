import React from 'react';
import styled from 'styled-components/native';

type Props = {
  area: string;
};

const mobileSkills = [
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Ffrontend%2Freact-native.png?alt=media&token=cc036e1c-dc75-41fa-9072-69d9624858f7',
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Ffrontend%2Fjavascript.png?alt=media&token=c539b032-fe6d-47cc-b99a-ce5abc430dfe',
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Ffrontend%2Ftypescript.png?alt=media&token=69b5dbcc-843e-499f-9aef-3bdece07e415',
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Ffrontend%2Fredux.png?alt=media&token=96664b9a-e80c-497b-90ef-f9c06983a927',
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Ffrontend%2Fstyled-components.png?alt=media&token=6d18a3b7-f4c1-4b4a-b5ea-3eb9ce22c110',
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Ffrontend%2Ftailwind.png?alt=media&token=f6516fef-6eec-4739-98ce-63fb72f45c71',
];
const backendSkills = [
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Fbackend%2Fnode.png?alt=media&token=952f2555-ac78-40cf-b215-f4b825bde6f4',
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Fbackend%2Ffirebase.png?alt=media&token=4866284d-4c96-4dc0-98d5-1275c2d80b02',
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Fbackend%2Fmysql.png?alt=media&token=4887a10c-e97b-46a8-8437-6645217ffe33',
  'https://firebasestorage.googleapis.com/v0/b/meuportfolio-a9569.appspot.com/o/techs%2Fbackend%2Fprisma.png?alt=media&token=491b5d67-cfd9-49ee-a9a9-563c2d25a690',
];

const Container = styled.View`
  flex: 1;
  min-height: 100px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 20px;
  flex-direction: column;
  padding-vertical: 20px;
`;

const TopArea = styled.View`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  justify-content: center;
  align-items: center;
`;

const Area = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const IconsArea = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const IconImageArea = styled.View`
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
`;
const IconImgs = styled.Image`
  width: 70%;
  height: 70%;
`;

export function SkillItem({ area }: Props) {
  return (
    <Container>
      <TopArea>
        <Area>{area}</Area>
      </TopArea>
      <IconsArea>
        {area.toLocaleLowerCase() === 'mobile' &&
          mobileSkills.map((item, index) => (
            <IconImageArea key={index}>
              <IconImgs source={{ uri: item }} resizeMode="contain" />
            </IconImageArea>
          ))}

        {area.toLocaleLowerCase() === 'backend' &&
          backendSkills.map((item, index) => (
            <IconImageArea key={index}>
              <IconImgs source={{ uri: item }} resizeMode="contain" />
            </IconImageArea>
          ))}
      </IconsArea>
    </Container>
  );
}
