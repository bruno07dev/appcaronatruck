import React from 'react';

import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useAuth } from '../../contexts/auth';

import {
  BackButton,
  Container,
  Header,
  HeaderTitle,
  ProviderContainer,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  function handleSignOut() {
    signOut();
  }

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Header>
            <BackButton onPress={handleSignOut}>
              <AntDesign name="arrowleft" size={24} />
            </BackButton>
            <HeaderTitle>Escolha seu perfil</HeaderTitle>
          </Header>

          <ProviderContainer onPress={() => navigation.navigate('SignUp')}>
            <ProviderInfo>
              <FontAwesome
                style={{ marginLeft: 20 }}
                name="truck"
                size={23}
                color="#101f37"
              />
              <ProviderName>CAMINHONEIRO</ProviderName>

              <ProviderMeta>
                <ProviderMetaText>
                  Em busca de cargas. Possui caminhão disponível para fretes
                </ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>

          <ProviderContainer onPress={() => navigation.navigate('SignUp')}>
            <ProviderInfo>
              <Entypo
                style={{ marginLeft: 20 }}
                name="box"
                size={23}
                color="#101f37"
              />

              <ProviderName>EMBARCADOR</ProviderName>

              <ProviderMeta>
                <ProviderMetaText>
                  Procurando transportadoras e/ou motoristas autônomos
                </ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>

          <ProviderContainer onPress={() => navigation.navigate('SignUp')}>
            <ProviderInfo>
              <FontAwesome
                style={{ marginLeft: 0 }}
                name="truck"
                size={23}
                color="#101f37"
              />
              <Entypo
                style={{ marginLeft: 30, marginTop: -24 }}
                name="box"
                size={23}
                color="#101f37"
              />
              <ProviderName>TRANSPORTADORA</ProviderName>

              <ProviderMeta>
                <ProviderMetaText>
                  Em busca de fretes ou cargas
                </ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
