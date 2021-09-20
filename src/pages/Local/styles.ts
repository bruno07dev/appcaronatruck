import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerLocal = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40}px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 20px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  margin-top: -5px;
  align-items: center;
  margin-left: 100px;
  color: #101f37;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 0px;
  margin-left: -120px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
`;

export const TitleImagePicker = styled.Text`
  font-size: 24px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
`;
