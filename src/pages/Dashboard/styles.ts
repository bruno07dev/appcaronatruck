import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f1f6f9;
`;
export const BackButton = styled.TouchableOpacity`
  margin-top: 0px;
`;

export const Header = styled.View`
  margin-top: -10px;
  margin-bottom: 24px;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
`;

export const HeaderTitle = styled.Text`
  color: #101f37;
  font-size: 20px;
  font-family: 'Lucida Sans';
  line-height: 28px;
  margin-right: 25%;
`;

export const ProviderContainer = styled(RectButton)`
  background: #ffffff;
  border: 5px solid;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 16px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 24px;
`;

export const ProviderName = styled.Text`
  margin-top: -25px;
  text-align: center;
  font-family: 'Lucida Sans';
  color: #101f37;
  font-size: 18px;
  font-weight: bold;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  margin-top: 10px;
  color: #2a323c;
  font-family: 'Lucida Sans';
  font-size: 16px;
`;
