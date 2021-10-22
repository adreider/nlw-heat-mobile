import React from "react";
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import { Headers } from "../../components/Headers";
import { MessageList } from "../../components/MessageList";
import { SignInBox } from "../../components/SignInBox";
import { SendMessageForm } from "../../components/SendMessageForm";


import { styles } from './styles';
import { useAuth } from "../../hooks/auth";

function Home() {
  const { user } = useAuth()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding': undefined }
    >
      <View style={styles.container} >
        <Headers />
        <MessageList />

        {user ? <SendMessageForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  )

}

export { Home }