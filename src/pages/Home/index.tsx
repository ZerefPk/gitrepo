import React, { useState, useCallback, useRef } from 'react';
import { useNavigation }  from '@react-navigation/native';

import { FormHandles } from '@unform/core';

import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import Input  from '../../components/Input';


import api from '../../services/api';




import  { Container, Group, TextApp, Title, FormGroup,
  RepositoriesList, RepositoryContainer,
  RepositoryAvatar, RepositoryName,
  RepositoryDescription,
  RepositoryInfo
} from './styles';

export interface RepositoryItem{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};
interface FormData {
  find: string;
}
const Home: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const {navigate} = useNavigation();

  const [repositories, setRepositories] = useState<RepositoryItem[]>([]);

  async function handleAddRepository(data: FormData) {
    const response = await api.get<RepositoryItem>(`repos/${data.find}`);
    const repository = response.data;

    setRepositories([... repositories, repository]);
  }
  const navigateToUser = useCallback((data: string) => {
    navigate('User', { data })
  }, [ navigate ]);

  return (
    <Container>
      <Group>
        <Icon name="compass" size={20} color="#000" />
        <TextApp>github_explorer</TextApp>
      </Group>
      <Group>

        <Title>Explore repositórios
no Github.</Title>
      </Group>


    <FormGroup ref={formRef} onSubmit={ handleAddRepository }>
      <Input name="find" placeholder="Digite aqui"/>
      <Button  onPress={ () => {
          formRef.current ?.submitForm();
        } } >
        search
      </Button>
    </FormGroup>


    <RepositoriesList
      data={repositories}
      keyExtractor={ (item) => item.full_name }
      renderItem={({ item: respository }) => (
        <RepositoryContainer onPress={ () => navigateToUser(respository.full_name) }>
          <RepositoryAvatar source={{ uri: respository.owner.avatar_url }}/>
          <RepositoryInfo>
            <RepositoryName>
              { respository.full_name }
            </RepositoryName>
            <RepositoryDescription>
              { respository.description }
            </RepositoryDescription>

          </RepositoryInfo>
          <Icon name="chevron-right" size={20} color="#000"/>
        </RepositoryContainer>
      )}
    />

    </Container>

  );
};
export default Home;
