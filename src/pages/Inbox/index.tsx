import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Linking } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import {
  renderInputToolbar,
  renderActions,
  renderComposer,
  renderSend,
} from './configure/inputToolbar';

import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './configure/messageContainer';
import img from '../../assets/truck.png';

import {
  Container,
  Header,
  ProviderContainer,
  BackButton,
  ProviderInfo,
  ProviderName,
  ContainerChat,
  ProviderAvatar,
  ProviderMetaContact,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
  phoneNumber: string;
  whatsappNo: number;
}

const Inbox: React.FC = () => {
  const navigation = useNavigation();

  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [provider, setProvider] = useState<Provider[]>([]);

  useEffect(() => {
    api.get('provider').then(response => {
      setProvider(response.data);
    });
  }, []);

  useEffect(() => {
    setMessages();
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  };

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <Container>
        <Header>
          <ProviderContainer>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={26} color="#00a6ff" />
            </BackButton>
            <ProviderAvatar
              style={{
                borderRadius: 0,
                borderColor: '#a9a7b1',
                borderWidth: 1,
              }}
              source={img}
            />

            <ProviderInfo>
              <ProviderName>Transportador</ProviderName>
              <ProviderMetaContact>
                <Icon
                  name="phone"
                  size={28}
                  color="#00a6ff"
                  onPress={() => Linking.openURL(`tel:${provider.phoneNumber}`)}
                />
              </ProviderMetaContact>
            </ProviderInfo>
          </ProviderContainer>
        </Header>
        <ContainerChat>
          <GiftedChat
            placeholder="Mensagem"
            messages={messages}
            text={text}
            onInputTextChanged={setText}
            onSend={onSend}
            user={{
              _id: 1,
              name: 'DevUnit',
              avatar: 'https://placeimg.com//150/any',
            }}
            alignTop
            alwaysShowSend
            scrollToBottom
            // showUserAvatar
            renderAvatarOnTop
            renderUsernameOnMessage
            bottomOffset={26}
            onPressAvatar={console.log}
            renderInputToolbar={renderInputToolbar}
            renderActions={renderActions}
            renderComposer={renderComposer}
            renderSend={renderSend}
            renderAvatar={renderAvatar}
            renderBubble={renderBubble}
            renderSystemMessage={renderSystemMessage}
            renderMessage={renderMessage}
            renderMessageText={renderMessageText}
            // renderMessageImage
            renderCustomView={renderCustomView}
            isCustomViewBottom
            messagesContainerStyle={{ backgroundColor: '#fff' }}
            parsePatterns={linkStyle => [
              {
                pattern: /#(\w+)/,
                style: linkStyle,
                onPress: tag => console.log(`Pressed on hashtag: ${tag}`),
              },
            ]}
          />
        </ContainerChat>
      </Container>
    </>
  );
};

export default Inbox;
