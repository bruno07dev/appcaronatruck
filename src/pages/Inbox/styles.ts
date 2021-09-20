import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ContainerLocal = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40}px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 10px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #a9a7b1;
`;

export const HeaderTitle = styled.Text`
  margin-top: -5px;
  align-items: center;
  margin-left: 20px;
  color: #101f37;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
`;

export const ProviderContainer = styled.View`
  background: #fff;
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 0px;
  margin-left: 0px;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;

export const ProviderAvatar = styled.ImageBackground`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  justify-content: center;
`;
export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
  justify-content: center;
`;
export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #3e3b47;
  justify-content: center;
  margin-top: 10px;
`;

export const ProviderMetaContact = styled(RectButton)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: -25px;
`;

export const ContainerChat = styled.View`
  flex: 1;
  background: #fff;
`;
