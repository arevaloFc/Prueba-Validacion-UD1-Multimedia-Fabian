import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import ButtonFab from './components/buttonFab/ButtonFab';
import MovementInput from './components/movementInput/MovementInput';

export default function App() {

  /* Mostrar el componente MovementInput al momento de presionar el ButtonFab */
  const [ showMovementInput, setShowMovementInput ] = useState( false );

  return (
    <View style = { styles.container }>
      <MovementInput 
        showMovementInput = { showMovementInput } 
        setShowMovementInput = { setShowMovementInput }
      />
      <ButtonFab 
        setShowMovementInput = { setShowMovementInput }
      />
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
