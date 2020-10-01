import React from 'react';

import {Container, ImageUser, Body, Title, Description} from './style';


import userImage from '../../assets/me.png';

interface RepositoryItem{
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};
const Card: React.FC<RepositoryItem> = ({ children }) => {
  return (
    <Container>
      <ImageUser source={userImage}/>
      <Body>
        <Title>tiagoluchtenberg/repo</Title>
        <Description>Descrição do repo </Description>

      </Body>
    </Container>
  );
};

export default Card;
