import React, { useRef, useCallback } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import Input from '../../components/Input';
import ConfirmationButton from '../../components/Button';
import Footer from '../../components/Footer';

import {
  Container,
  ContainerLocal,
  BackButton,
  Title,
  Header,
  HeaderTitle,
} from './styles';

interface ActivitieFormData {
  type: string;
  weight: string;
  dimensions: string;
  quantity: string;
}

const Local: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const handleNewPackage = useCallback(
    async (data: ActivitieFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          type: Yup.string().required('Tipo de carga é obrigatório'),
          weight: Yup.string().required('Peso é obrigatório'),
          dimensions: Yup.string().required('Tamanho é obrigatório'),
          quantity: Yup.string().required('Quantidade é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { type, weight, dimensions, quantity } = data;

        const formData = {
          type,
          weight,
          dimensions,
          quantity,
        };

        const response = await api.put('/activities', formData);

        transportSchedule(response.data);

        Alert.alert('Carga cadastrada com sucesso');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        Alert.alert(
          'Erro no cadastro da carga',
          'Ocorreu um erro no cadastro da carga, tente novamente.',
        );
      }
    },
    [navigation],
  );

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
          <HeaderTitle>Local</HeaderTitle>
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
            <ContainerLocal>
              <View>
                <Title>Para onde deseja enviar?</Title>
              </View>
              <Form ref={formRef} onSubmit={handleNewPackage}>
                <Input
                  containerStyle={{
                    backgroundColor: '#ededed',
                  }}
                  keyboardType="numeric"
                  name="type"
                  icon="map"
                  placeholder="De(endereço completo)"
                  returnKeyType="next"
                />

                <Input
                  containerStyle={{
                    backgroundColor: '#ededed',
                  }}
                  autoCapitalize="words"
                  name="wheight"
                  icon="map"
                  placeholder="Para(endereço completo)"
                  returnKeyType="next"
                />
              </Form>

              <ConfirmationButton onPress={() => formRef.current?.submitForm()}>
                Continuar
              </ConfirmationButton>
            </ContainerLocal>
          </ScrollView>
        </KeyboardAvoidingView>
        <Footer />
      </Container>
    </>
  );
};

export default Local;
