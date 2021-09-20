import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerLocal = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40}px;
`;

export const ContainerMap = styled.View`
  flex: 1;
  background: #fff;
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

export const ProviderSelected = styled.View`
  flex-direction: column;
  padding: 20px 24px 16px;
  margin-left: -15px;
  margin-right: -15px;
`;

export const ProviderContainer = styled(RectButton)`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
`;
export const ProviderAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;
export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;
export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #ff9000;
`;
export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaLocal = styled.Text`
  margin-left: 8px;
  color: #212121;
  font-family: 'RobotoSlab-Regular';
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #212121;
  font-family: 'RobotoSlab-Regular';
`;
