import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import Footer from '../../components/Footer';

import {
  Container,
  ContainerLocal,
  ContainerMap,
  BackButton,
  Header,
  HeaderTitle,
  ProviderSelected,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProviderMetaLocal,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface PackageItem {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const Call: React.FC = () => {
  const [provider, setProvider] = useState<Provider[]>([]);
  const [packageLocal, setpackageLocal] = useState<PackageItem[]>([]);

  const { user } = useAuth();
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    api.get('/packegeLocal').then(({ data }) => {
      setpackageLocal(data);
    });
  });

  useEffect(() => {
    api.get('provider').then(response => {
      setProvider(response.data);
    });
  }, []);
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <Container>
        <Header>
          <BackButton onPress={handleGoBack}>
            <Icon name="chevron-left" size={18} color="#101f37" />
          </BackButton>
          <HeaderTitle>Chamadas</HeaderTitle>
        </Header>
        <ContainerMap />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
            scrollEnabled
          >
            <ContainerLocal>
              <ProviderSelected
                data={provider}
                keyExtractor={provider => provider.id}
                renderItem={({ item: provider }) => (
                  <ProviderContainer
                    onPress={() => navigateToMessage('Message')}
                  >
                    <ProviderAvatar
                      source={{ uri: provider.avatar_url }}
                      style={{
                        borderColor: '#101f37',
                        borderWidth: 1,
                      }}
                    />

                    <ProviderInfo>
                      <ProviderName>{provider.name}</ProviderName>

                      <ProviderMeta>
                        <ProviderMetaLocal>São Paulo</ProviderMetaLocal>
                      </ProviderMeta>

                      <ProviderMeta>
                        <ProviderMetaText>Minas Gerais</ProviderMetaText>
                      </ProviderMeta>
                    </ProviderInfo>
                  </ProviderContainer>
                )}
              />
            </ContainerLocal>
          </ScrollView>
        </KeyboardAvoidingView>
        <Footer />
      </Container>
    </>
  );
};

export default Call;
