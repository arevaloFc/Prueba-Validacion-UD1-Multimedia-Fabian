import { StyleSheet, View } from 'react-native';
import ButtonFab from './components/buttonFab/ButtonFab';
import MovementInput from './components/movementInput/MovementInput';

export default function App() {
  return (
    <View style={styles.container}>
      <MovementInput/>
      <ButtonFab/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
