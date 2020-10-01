import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 20%;
  height: 60px;
  background: #04D361;


  justify-content: center;
  align-items: center;

`;

export const ButtonText = styled(Icon)`
  color: #ffffff;
  font-size: 30px;
`;
