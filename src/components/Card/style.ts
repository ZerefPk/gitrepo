import styled from 'styled-components/native';
import { Image } from 'react-native';
export const Container = styled.View`
  width: 100%;
  height: 112px;
  background: #FFFFFF;
  padding: 20px;
  margin-bottom: 10px;
  flex-direction: row;

`;

export const ImageUser = styled(Image)`
  border-radius: 50px;
`;

export const Body = styled.View`
  margin-left: 5px;

`;
export const Title = styled.Text`
  color: #000;
  font-size: 20px;
`;

export const Description = styled.Text`
  color: #A8A8B3;
  font-size: 16px

`;
