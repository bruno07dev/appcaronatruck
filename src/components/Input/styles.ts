import styled, { css } from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

interface IconProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 8px;
  /* border: 2px solid ${({ theme }) => theme.colors.inputs}; */
  border-width: 2px;
  border-color: #ff9000;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: #ff9785;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #ff1565;
    `}
`;

export const TextInput = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)<IconProps>`
  margin-right: 16px;
  color: #ff8921;
  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      color: #ff7954;
    `}
`;
