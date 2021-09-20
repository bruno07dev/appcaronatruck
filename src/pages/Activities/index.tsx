import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ImagePicker from 'react-native-image-picker';

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
  ContainerActivitie,
  BackButton,
  Title,
  TitleImagePicker,
  Image,
  Header,
  HeaderTitle,
} from './styles';

interface ActivitieFormData {
  type: string;
  weight: string;
  dimensions: string;
  quantity: string;
}

const Activities: React.FC = () => {
  const imageurl =
    'https://helostatus.com/wp-content/uploads/2021/03/WhatsApp-DP.jpg';
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

  const launchImageLibrary = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response), response.assets[0]);
        setProfilePic(response.assets[0].uri);
        console.log('uri image response==>', response.assets[0].uri);
      }
    });
  };

  return (
    <>
      <Container>
        <Header>
          <BackButton onPress={handleGoBack}>
            <Icon name="chevron-left" size={18} color="#101f37" />
          </BackButton>
          <HeaderTitle>Atividades</HeaderTitle>
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
                <Title>Digite os dados da sua Carga</Title>
              </View>
              <Form ref={formRef} onSubmit={handleNewPackage}>
                <Input
                  containerStyle={{
                    backgroundColor: '#ededed',
                  }}
                  keyboardType="numeric"
                  name="type"
                  icon="tag"
                  placeholder="Tipo de Carga"
                  returnKeyType="next"
                />

                <Input
                  containerStyle={{
                    backgroundColor: '#ededed',
                  }}
                  autoCapitalize="words"
                  name="wheight"
                  icon="anchor"
                  placeholder="Peso da Carga"
                  returnKeyType="next"
                />

                <Input
                  containerStyle={{
                    backgroundColor: '#ededed',
                  }}
                  keyboardType="numeric"
                  name="dimensions"
                  icon="crop"
                  placeholder="Tamanho (dimensões da carga)"
                  returnKeyType="next"
                />

                <Input
                  containerStyle={{
                    backgroundColor: '#ededed',
                  }}
                  keyboardType="numeric"
                  name="quantity"
                  icon="tablet"
                  placeholder="Quantidade"
                />
              </Form>

              <View>
                <TitleImagePicker>Envie uma foto da sua Carga</TitleImagePicker>
              </View>
              <TouchableOpacity onPress={() => launchImageLibrary()}>
                <Image
                  source={{
                    uri: profilePic,
                  }}
                />
              </TouchableOpacity>

              <ConfirmationButton onPress={() => formRef.current?.submitForm()}>
                Confirmar
              </ConfirmationButton>
            </ContainerActivitie>
          </ScrollView>
        </KeyboardAvoidingView>
        <Footer />
      </Container>
    </>
  );
};

export default Activities;
