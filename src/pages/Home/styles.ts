import styled from 'styled-components/native';
import { Image, FlatList } from 'react-native';
import { Form } from '@unform/mobile';
import { RectButton } from 'react-native-gesture-handler';
import { RepositoryItem } from './index';


export const Container = styled.View`

  padding: 50px 10px;
`;
export const Group = styled.View`
  flex-direction: row;
  padding: 0 10px;
  margin-bottom: 15px;
`;

export const TextApp = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  color: #737380;
`;

export const FormGroup = styled(Form)`
  padding: 0 10px;
  margin-bottom: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;
export const ImageLogo = styled(Image)`
  border-radius: 20px;
`;
export const Title = styled.Text`
  font-size: 35px;
`;

export const RepositoriesList = styled(
  FlatList as new () => FlatList<RepositoryItem>
)`

`;
export const RepositoryContainer = styled(RectButton)`

  background: #FFFFFF;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const RepositoryAvatar = styled(Image)`
  width: 72px;
  height:72px

  border-radius: 50px;
`;

export const RepositoryInfo = styled.View`
  flex:1;
  margin-left: 10px;
`;

export const RepositoryName = styled.Text`
  color: #000;
  font-size: 20px;

`;

export const RepositoryDescription = styled.Text`
  color: #A8A8B3;
  font-size: 14px;

`;


