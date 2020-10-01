import React, { useCallback, useEffect, useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import {Container, InLine, TextApp, BtnBack,
  Header, RepositoryAvatar, RepositoryInfo,
  RepositoryName, RepositoryDescription,
  RepositoryItemInfo
 } from './style'

interface RouteParams{
  data: string;
}
interface RepositoryItem{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  forks: string;
  open_issues: string;
  watchers: string;
  language: string;
};
const User: React.FC = () => {
  const route = useRoute();
  const { data } = route.params as RouteParams;
  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack])

  const [repository, setRepository] = useState<RepositoryItem>();

  useEffect(() => {
    api.get<RepositoryItem>(`repos/${data}`).then((response) => {
      setRepository(response.data);

    });
  },[]);

  return  (
  <Container>
    <Header>
      <InLine>
        <Icon name="compass" size={20} color="#000" />
        <TextApp>github_explorer</TextApp>
      </InLine>
      <InLine>
        <BtnBack onPress={navigateBack}>
          <Icon name="chevron-left" size={20} color="#000"/><TextApp>Voltar</TextApp>
        </BtnBack>
        </InLine>
    </Header>
    <InLine>
      <RepositoryAvatar source={{ uri: repository ?.owner.avatar_url }}/>
      <RepositoryInfo>
        <RepositoryName>{repository?.full_name} </RepositoryName>
        <RepositoryDescription>{repository ?.description}</RepositoryDescription>
      </RepositoryInfo>
    </InLine>
    <InLine>
      <RepositoryInfo>
        <RepositoryName>{repository ?.watchers}</RepositoryName>
        <RepositoryDescription>Start</RepositoryDescription>
      </RepositoryInfo>
      <RepositoryInfo>
        <RepositoryName>{repository ?.forks}</RepositoryName>
        <RepositoryDescription>Forks</RepositoryDescription>
      </RepositoryInfo>
      <RepositoryInfo>
      <RepositoryName>{repository ?.open_issues}</RepositoryName>
        <RepositoryDescription>Issues abertas</RepositoryDescription>
      </RepositoryInfo>
    </InLine>
    <RepositoryName>MIT</RepositoryName>
    <RepositoryDescription>Licença</RepositoryDescription>
    <RepositoryName>{repository ?.language}</RepositoryName>
    <RepositoryDescription>Linguagem</RepositoryDescription>
  </Container>
  );
};

export default User;
