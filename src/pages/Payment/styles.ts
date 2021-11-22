import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerPayment = styled.View`
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
  margin: 12px 0 12px;
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: left;
`;

export const PayModContainer = styled(RectButton)`
  background: #ededed;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
`;

export const PayModInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const PayModName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  font-weight: bold;
  color: #478db8;
  margin-top: 5px;
`;

export const PayModIcon = styled.View`
  flex-direction: column;
  margin-left: 200px;
  margin-top: -35px;
  align-items: center;
`;
