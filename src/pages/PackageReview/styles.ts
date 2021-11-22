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
  font-weight: bold;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const Image = styled.Image`
  height: 150px;
  width: 250px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
  border-color: #101f37;
  border-width: 1px;
`;

export const TitleTypeCharge = styled.Text`
  font-size: 18px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const TitleChargeWeight = styled.Text`
  font-size: 18px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const TitleChargeDimensions = styled.Text`
  font-size: 18px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const TitleChargeQuantity = styled.Text`
  font-size: 18px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const TitleLocal = styled.Text`
  font-size: 24px;
  color: #478db8;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
  margin: 12px 0 12px;
  margin-top: 20px;
  text-align: left;
`;

export const TitleOrigin = styled.Text`
  font-size: 18px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const TitleDestiny = styled.Text`
  font-size: 18px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const TitleCost = styled.Text`
  font-size: 24px;
  color: #478db8;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
  margin: 12px 0 12px;
  margin-top: 20px;
  text-align: left;
`;

export const TitleShippingCost = styled.Text`
  font-size: 18px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const TitlePostDate = styled.Text`
  font-size: 18px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
  text-align: left;
`;

export const InfoContainer = styled.Text`
  background: #ededed;
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.View`
  margin-top: 40px;
`;
