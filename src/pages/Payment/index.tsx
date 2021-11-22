import React, { useCallback } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

import Footer from '../../components/Footer';

import {
  Container,
  ContainerPayment,
  BackButton,
  Header,
  HeaderTitle,
  Title,
  PayModContainer,
  PayModInfo,
  PayModName,
  PayModIcon,
} from './styles';

const Payment: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const navigateToSetPaymentMode = useCallback(() => {
    navigation.navigate('Payment');
  }, [navigation]);

  return (
    <>
      <Container>
        <Header>
          <BackButton onPress={handleGoBack}>
            <Icon name="chevron-left" size={18} color="#101f37" />
          </BackButton>
          <HeaderTitle>Pagamento</HeaderTitle>
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
            <ContainerPayment>
              <View>
                <Title>Selecione a forma de pagamento</Title>
              </View>

              <PayModContainer onPress={navigateToSetPaymentMode}>
                <PayModInfo>
                  <PayModName>Crédito</PayModName>

                  <PayModIcon>
                    <Icon name="credit-card" size={40} color="#478db8" />
                  </PayModIcon>
                </PayModInfo>
              </PayModContainer>

              <PayModContainer onPress={navigateToSetPaymentMode}>
                <PayModInfo>
                  <PayModName>Débito</PayModName>

                  <PayModIcon>
                    <Icon name="credit-card" size={40} color="#478db8" />
                  </PayModIcon>
                </PayModInfo>
              </PayModContainer>

              <PayModContainer onPress={navigateToSetPaymentMode}>
                <PayModInfo>
                  <PayModName>Pix</PayModName>

                  <PayModIcon>
                    <Icon name="qrcode" size={40} color="#478db8" />
                  </PayModIcon>
                </PayModInfo>
              </PayModContainer>

              <PayModContainer onPress={navigateToSetPaymentMode}>
                <PayModInfo>
                  <PayModName>Boleto</PayModName>

                  <PayModIcon>
                    <Icon name="barcode" size={40} color="#478db8" />
                  </PayModIcon>
                </PayModInfo>
              </PayModContainer>
            </ContainerPayment>
          </ScrollView>
        </KeyboardAvoidingView>
        <Footer />
      </Container>
    </>
  );
};
export default Payment;
