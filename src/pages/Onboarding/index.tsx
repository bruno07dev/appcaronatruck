import React from 'react';
import { View, Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const Wellcome: React.FC = ({ navigation }) => {
  return (
    <>
      <Onboarding
        imageContainerStyles={{
          position: 'absolute',
          marginTop: 10,
        }}
        onSkip={() => navigation.navigate('SignIn')}
        onDone={() => navigation.navigate('SignIn')}
        DotComponent={Dots}
        titleStyles={{ color: '#101e38' }}
        subtitleStyles={{ color: '#101e38' }}
        bottomBarColor="#101e38"
        pages={[
          {
            backgroundColor: '#101f37',
            image: <Image source={require('../../assets/wellcome-img.png')} />,
          },
          {
            backgroundColor: '#101f37',
            image: <Image source={require('../../assets/go.png')} />,
            titleStyles: {
              paddingTop: 60,
            },
            title: 'Seja bem vindo',

            subTitleStyles: {
              marginBottom: -50,
              fontSize: 20,
              color: '#101e38',
            },
            subtitle:
              'Somos o CaronaTruck, uma plataforma que ajuda a definir, criar e conectar pessoas a uma comunidade global de  Serviços de Frete e Caminhoneiros que celebram interesses comuns, minimizando divisões culturais, geográficas e sociais por meio de comunicações online, offline e interações.',
          },
        ]}
      />
    </>
  );
};

export default Wellcome;
