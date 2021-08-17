import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Logo = styled.ImageBackground`
  margin-top: -50px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #2a323c;
  font-family: 'Lucida Sans';
  font-weight: bold;
  margin-top: 20px;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #212121;
  font-family: 'Lucida Sans';
  left: 10;
  right: 10;
  bottom: -50;
`;

export const StartButton = styled.TouchableOpacity`
  position: absolute;
  left: 10;
  right: 10;
  bottom: 0;
  padding: 16px 0 ${8 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
