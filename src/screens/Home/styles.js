import styled from "styled-components";

export const Container = styled.div``;
export const BannerArea = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 30px;
  padding: 10px 40px;
  justify-content: space-around;
  align-items: center;
`;

export const BannerSocialMedia = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  min-height: 400px;
  justify-content: center;
  align-items: center;
`;

export const BannerSocialMediaItem = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  cursor: pointer;
`;

export const BannerBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const BannerBoxTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
export const BannerBoxSubTitle = styled.h2`
  font-size: 20px;
  color: #333;
`;

export const BannerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 160px;
  height: 60px;
  border-radius: 10px;
  background-color: #6b5ad3;
  color: #fff;
  border: 0;
  margin-top: 30px;
  font-size: 18px;
`;

export const BannerAvatarArea = styled.div`
  display: flex;
  flex: 1;
`;

export const BannerAvatar = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 250px;
`;
