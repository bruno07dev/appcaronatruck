import React, { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import Footer from '../../components/Footer';

import {
  Container,
  Header,
  HeaderTitle,
  ProviderListInfoContainer,
  ProvidersListInfo,
  UpdatedInfo,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProviderMetaContact,
  ProviderMetaWhatsapp,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
  phoneNumber: string;
  whatsappNo: number;
  whatsappMsg: number;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const { user } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate('Activities', { providerId });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>Filtrar fretes por</HeaderTitle>
      </Header>

      <ProviderListInfoContainer>
        <ProvidersListInfo>288 fretes a 100km de São Paulo</ProvidersListInfo>
        <UpdatedInfo>há 28 min</UpdatedInfo>
      </ProviderListInfoContainer>
      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => navigateToCreateAppointment(provider.id)}
          >
            <ProviderAvatar
              source={{ uri: provider.avatar_url }}
              style={{
                borderColor: '#8592a7',
                borderWidth: 1,
                backgroundColor: '#EDF1F7',
              }}
            />

            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>

              <ProviderMeta>
                <Icon name="circle" size={18} color="#ffba5c" />
                <ProviderMetaText>São Paulo</ProviderMetaText>
              </ProviderMeta>

              <ProviderMeta>
                <Icon name="map-marker" size={18} color="#3e3b47" />
                <ProviderMetaText>Minas Gerais</ProviderMetaText>
                <ProviderMetaContact>
                  <Icon
                    name="phone"
                    size={28}
                    color="#ffba5c"
                    onPress={() =>
                      Linking.openURL(`tel:${provider.phoneNumber}`)
                    }
                  />
                </ProviderMetaContact>
                <ProviderMetaWhatsapp>
                  <Icon
                    name="whatsapp"
                    size={28}
                    color="#ffba5c"
                    onPress={() =>
                      Linking.openURL(
                        `whatsapp://send?phone=${provider.whatsappNo}&text=${provider.whatsappMsg}`,
                      )
                    }
                  />
                </ProviderMetaWhatsapp>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
      <Footer />
    </Container>
  );
};

export default Dashboard;
