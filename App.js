import { FlatList, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import ButtonFab from './components/buttonFab/ButtonFab';
import MovementInput from './components/movementInput/MovementInput';
import ListItem from './components/listItem/ListItem';
import TotalBalance from './components/totalBalance/TotalBalance';

export default function App() {

  /* Lista de movimientos */
  const [ movements, setMovements ] = useState([])

  /* Propiedades movimiento */
  const [ movement, setMovement ] = useState({
    id:'',
    description: '',
    amount: 0,
    dateMovement: ''
  });

  /* Ingresar un movimiento */
  const addMovementHandler = ( movement ) => {
    setMovements(() => [movement,...movements]);
  }

  /* Eliminar ingreso o gasto */
  const deleteMovement = ( movement ) => {
  
    setMovements(() => movements.filter(( value ) => value.id !== movement.id));
    setBalance((parseInt(balance) - parseInt(movement.amount)));
  
  }

  /* Editar un movimiento */
  const [ edit, setEdit ] = useState(false)

  /* Mostrar el componente MovementInput al momento de presionar el ButtonFab */
  const [ showMovementInput, setShowMovementInput ] = useState( false );

  /* Dinero total */
  const [ balance, setBalance ] = useState(0)

  return (
    <View style = { styles.container }>
      <TotalBalance
        balance = { balance }
      />
      <MovementInput 
        balance = { balance }
        movement = { movement }
        setBalance = { setBalance }
        setMovement = { setMovement }
        onMovementAdd = { addMovementHandler } 
        showMovementInput = { showMovementInput } 
        setShowMovementInput = { setShowMovementInput }
      />
      <FlatList 
        data = { movements } 
        renderItem = {( movementsData ) => {
          return (
            <ListItem 
              setEdit = { setEdit }
              key = { movementsData.id }
              movements = { movementsData.item }
              deleteMovement = { deleteMovement }
            />
          )
        }}
        style = { styles.flatlistStyle } 
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

  flatlistStyle:{
    width: '100%'
  },

});
