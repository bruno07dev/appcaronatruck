import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerActivitie = styled.View`
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
  margin-left: 80px;
  color: #101f37;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 0px;
  margin-left: -100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #478db8;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
  margin: 12px 0 40px;
  text-align: center;
`;

export const TitleImagePicker = styled.Text`
  font-size: 24px;
  color: #478db8;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
  margin: 30px 0 40px;
  text-align: center;
`;

export const Image = styled.Image`
  align-self: center;
  height: 150px;
  width: 300px;
  border-radius: 5px;
  margin: 0px;
  margin-bottom: 40px;
  border-color: #101f37;
  border-width: 1px;
`;
