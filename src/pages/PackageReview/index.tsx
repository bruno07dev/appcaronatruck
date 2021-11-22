import React, { useCallback, useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

import ConfirmationButton from '../../components/Button';
import Footer from '../../components/Footer';

import {
  Container,
  ContainerActivitie,
  BackButton,
  Title,
  Image,
  TitleTypeCharge,
  TitleChargeWeight,
  TitleChargeDimensions,
  TitleChargeQuantity,
  TitleOrigin,
  TitleDestiny,
  TitleShippingCost,
  TitleCost,
  TitleLocal,
  Header,
  HeaderTitle,
  TitlePostDate,
  InfoContainer,
  Button,
} from './styles';

const PackageReview: React.FC = () => {
  const imageurl =
    'https://helostatus.com/wp-content/uploads/2021/03/WhatsApp-DP.jpg';

  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const navigateToSetPayment = useCallback(() => {
    navigation.navigate('Payment');
  }, [navigation]);

  const [loader, setLoader] = useState(false);
  const [profilePic, setProfilePic] = useState(imageurl);

  useEffect(() => {
    getDataFromStorage();
  }, [0]);

  const getDataFromStorage = async () => {
    setLoader(true);

    const ProfilePictureasync = await AsyncStorage.getItem('ProfilePicture');
    setProfilePic(ProfilePictureasync);
    setLoader(false);
  };

  const setDataToStorage = () => {
    AsyncStorage.setItem('ProfilePicture', profilePic);
  };

  return (
    <>
      <Container>
        <Header>
          <BackButton onPress={handleGoBack}>
            <Icon name="chevron-left" size={18} color="#101f37" />
          </BackButton>
          <HeaderTitle>Revise seu pacote</HeaderTitle>
        </Header>

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
            <ContainerActivitie>
              <View>
                <Title>Dados da sua Carga</Title>
              </View>

              <Image
                source={{
                  uri: profilePic,
                }}
              />

              <View>
                <TitleTypeCharge>Tipo:</TitleTypeCharge>
                <InfoContainer />
              </View>

              <View>
                <TitleChargeWeight>Peso:</TitleChargeWeight>
                <InfoContainer />
              </View>

              <View>
                <TitleChargeDimensions>Dimensões:</TitleChargeDimensions>
                <InfoContainer />
              </View>

              <View>
                <TitleChargeQuantity>Quantidade:</TitleChargeQuantity>
                <InfoContainer />
              </View>

              <View>
                <TitleLocal>Endereço de coleta e entrega</TitleLocal>
              </View>

              <View>
                <TitleOrigin>Origem:</TitleOrigin>
                <InfoContainer />
              </View>

              <View>
                <TitleDestiny>Destino:</TitleDestiny>
                <InfoContainer />
              </View>

              <View>
                <TitleCost>Data e Valores</TitleCost>
              </View>

              <View>
                <TitleShippingCost>Valor do frete:</TitleShippingCost>
                <InfoContainer />
              </View>

              <View>
                <TitlePostDate>Data da coleta:</TitlePostDate>
                <InfoContainer />
              </View>
              <Button>
                <ConfirmationButton onPress={navigateToSetPayment}>
                  Continuar para pagamento
                </ConfirmationButton>
              </Button>
            </ContainerActivitie>
          </ScrollView>
        </KeyboardAvoidingView>
        <Footer />
      </Container>
    </>
  );
};

export default PackageReview;
