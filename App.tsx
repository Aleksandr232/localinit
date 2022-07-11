import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/screens/AuthScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <Auth/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
