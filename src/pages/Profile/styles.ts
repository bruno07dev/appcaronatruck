import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #ededed;
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 90px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #101f37;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0 12px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 0px;
`;

export const UserAvatar = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 98px;
  align-self: center;
`;
