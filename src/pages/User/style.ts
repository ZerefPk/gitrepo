import styled from 'styled-components/native';
import { Image} from 'react-native'
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 50px 10px;
`;

export const Header = styled.View`
  padding: 0 10px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InLine = styled.View`
  flex-direction: row;
  padding: 0 10px;
  margin-bottom: 15px;
`;

export const TextApp = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  color: #737380;
`;

export const BtnBack = styled(RectButton)`
  flex-direction: row;

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
export const RepositoryItemInfo = styled.View`

`;
