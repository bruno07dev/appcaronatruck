import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import { AuthProvider } from './contexts/auth';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent />
      <AuthProvider>
        <View style={{ backgroundColor: '#312e38', flex: 1 }}>
          <Routes />
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
