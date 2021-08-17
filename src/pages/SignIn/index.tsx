import React from 'react';

import { View, Image } from 'react-native';

import Button from '../../components/Button';

import { useAuth } from '../../contexts/auth';

import logoImage from '../../assets/logo.png';

import { Title, Text, Container, Logo, StartButton } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  async function handleSignIn() {
    await signIn();
  }

  return (
    <>
      <View />
      <Container>
        <Logo>
          <Image source={logoImage} />
        </Logo>
        <Title>Seja bem vindo!</Title>
        <Text>
          Somos o CaronaTruck, uma plataforma que ajuda a definir, criar e
          conectar pessoas a uma comunidade global de serviços de frete e
          caminhoneiros que celebram interesses comuns, por meio de comunicação
          online, offline e interações.
        </Text>
        <StartButton>
          <Button onPress={handleSignIn}>Iniciar</Button>
        </StartButton>
      </Container>
    </>
  );
};

export default SignIn;
