import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as LocalAuth from 'expo-local-authentication'

import Auth from './src/screens/AuthScreen';
import PaymentScreen from './src/screens/PaymentScreen';

export default function App() {
  const [isBiometric, setIsBiometric] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuth.hasHardwareAsync();
      setIsBiometric(compatible);
    })();
  });

  function onAuthenticate () {
    const auth = LocalAuth.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Password',
    });
    auth.then(result => {
      setIsAuth(result.success);
        console.log(result);
    }
    );
  }
  

  return (
    <View style={styles.container}>
      { isAuth
        ?  <PaymentScreen/> 
        :   <Auth/>
      }
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
