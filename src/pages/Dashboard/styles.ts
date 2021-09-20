import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Provider } from './index';

export const Container = styled.View`
  flex: 1;
  background: #ededed;
`;

export const Header = styled.View`
  padding: 30px;
  background: #ffba5c;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  margin-top: -30px;
  color: #212121;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const ProviderListInfoContainer = styled.View`
  padding: 30px;
  background: #fff;

  justify-content: center;
  align-items: center;
`;
export const ProvidersListInfo = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #3e3b47;
  font-family: 'RobotoSlab-Medium';
`;

export const UpdatedInfo = styled.Text`
  flex-direction: column;
  font-size: 10px;
  text-align: left;
  margin-top: 10px;
  margin-left: -280px;
  color: #3e3b47;
  font-family: 'RobotoSlab-Medium';
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
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
  width: 80px;
  height: 80px;
  border-radius: 20px;
  border-color: #212121;
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
export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #212121;
  font-family: 'RobotoSlab-Regular';
`;

export const ProviderMetaContact = styled(RectButton)`
  flex-direction: column;
  margin-left: 90px;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaWhatsapp = styled(RectButton)`
  flex-direction: column;
  margin-left: -20px;
  align-items: center;
  margin-top: -70px;
`;

export const Footer = styled.View`
  padding: 30px;
  background: #3e3b47;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
