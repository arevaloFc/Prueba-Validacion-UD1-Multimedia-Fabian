import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ButtonFab from './components/buttonFab/ButtonFab';
import MovementInput from './components/movementInput/MovementInput';
import ListItem from './components/listItem/ListItem';
import TotalBalance from './components/totalBalance/TotalBalance';
import { palette } from './constants/theme';

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

  const modifyMovementHandler = ( movement ) =>{
  
    let listMovements = movements.map(( value ) => {

      let item = { ...value }

      if ( item.id === movement.id ){
        item.description = movement.description
        item.amount = movement.amount
        item.dateMovement = movement.dateMovement 
      } 

      return item

    })

    setMovements(listMovements);
    setEdit(false);

  }

  /* Mostrar el componente MovementInput al momento de presionar el ButtonFab */
  const [ showMovementInput, setShowMovementInput ] = useState( false );

  /* Dinero total */
  const [ balance, setBalance ] = useState(0)

  return (
    <View style = { styles.container }>
      <ImageBackground 
        resizeMode = "cover" 
        style = { styles.imageBackground }
        source = { require("./assets/fondo02.jpg") } 
      >
        <TotalBalance
          balance = { balance }
        />
        <Text 
          style = { styles.IncomeORExpenses}
        > 
          HISTORIAL
        </Text>
        <MovementInput
          edit = { edit } 
          balance = { balance } 
          movement = { movement }
          setBalance = { setBalance }
          setMovement = { setMovement }
          onMovementAdd = { addMovementHandler } 
          showMovementInput = { showMovementInput } 
          setShowMovementInput = { setShowMovementInput }
          modifyMovementHandler = { modifyMovementHandler }
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
                setShowMovementInput = {setShowMovementInput}
              />
            )
          }}
          style = { styles.flatlistStyle } 
        />
        <ButtonFab 
          setShowMovementInput = { setShowMovementInput }
        />
      </ImageBackground>
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flatlistStyle:{
    width: '100%'
  },

  imageBackground: {
    width: '100%',
    height: '100%'
  },

  IncomeORExpenses: {
    textAlign: 'center',
    position: 'absolute',
    top: 180,
    left: 16,
    paddingTop: 5,
    paddingLeft: 135,
    paddingRight: 135,
    paddingBottom: 5,
    borderRadius: 10,
    color: palette.light.colorWhite,
    fontSize: palette.light.letterSize,
    fontWeight: palette.light.boldLetter,
    backgroundColor: palette.light.thirdColor
  }

});
