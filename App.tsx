import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/screens/AuthScreen';
import PaymentScreen from './src/screens/PaymentScreen';

export default function App() {
  return (
    <View style={styles.container}>
       {/*  <Auth/> */}
       <PaymentScreen/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
