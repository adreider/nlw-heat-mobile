import React from "react";
import { View, Text } from 'react-native';

import { Headers } from "../../components/Headers";
import { MessageList } from "../../components/MessageList";
import { SignInBox } from "../../components/SignInBox";
import { SendMessageForm } from "../../components/SendMessageForm";


import { styles } from './styles'; 

function Home() {
  return (
    <View style={styles.container} >
      <Headers />
      <MessageList />
      <SignInBox />
      {/* <SendMessageForm /> */}
    </View>
  )

}

export { Home }