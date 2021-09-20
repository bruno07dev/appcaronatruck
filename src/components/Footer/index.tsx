import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  FooterContainer,
  CallButton,
  ActivitiesButton,
  LocalButton,
  InboxButton,
  ProfileButton,
  FooterTitle,
} from './styles';

const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToCall = useCallback(() => {
    navigate('Call');
  }, [navigate]);

  const navigateToActivities = useCallback(() => {
    navigate('Activities');
  }, [navigate]);

  const navigateToLocal = useCallback(() => {
    navigate('Local');
  }, [navigate]);

  const navigateToInbox = useCallback(() => {
    navigate('Inbox');
  }, [navigate]);

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <FooterContainer>
      <CallButton onPress={navigateToCall}>
        <Icon name="crosshairs" size={20} color="#478db8" />
        <FooterTitle>Chamadas</FooterTitle>
      </CallButton>

      <ActivitiesButton onPress={navigateToActivities}>
        <Icon name="chart-bar" size={20} color="#478db8" />
        <FooterTitle>Atividades</FooterTitle>
      </ActivitiesButton>

      <LocalButton onPress={navigateToLocal}>
        <Icon name="map-marker-alt" size={20} color="#478db8" />
        <FooterTitle>Local</FooterTitle>
      </LocalButton>

      <InboxButton onPress={navigateToInbox}>
        <Icon name="mail-bulk" size={20} color="#478db8" />
        <FooterTitle>Inbox</FooterTitle>
      </InboxButton>

      <ProfileButton onPress={navigateToProfile}>
        <Icon name="users" size={20} color="#478db8" />
        <FooterTitle>Perfil</FooterTitle>
      </ProfileButton>
    </FooterContainer>
  );
};

export default Footer;
