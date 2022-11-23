import { Button, ImageBackground, Modal, StyleSheet, TextInput, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { palette } from '../../constants/theme';

const MovementInput = ({ 
    edit,
    balance,
    movement,
    setBalance,
    setMovement,
    onMovementAdd,
    showMovementInput, 
    setShowMovementInput,
    modifyMovementHandler }) => {

    const changenDescriptionHandlerId = ( value ) => {

        setMovement(( movement )=>{
            return{
                ...movement,
                description:value,
                id:uuidv4()
            }
        });

    }

    const changeDateMovementHandler = ( value ) => {

        setMovement(( movement )=>{
            return{
                ...movement,
                dateMovement:value
            }
        });

    }

    const changenAmountHandler = ( value ) => {

        setMovement(( movement )=>{
            return{
                ...movement,
                amount:value
            }
        });

    }

    const changenDescriptionHandler = ( value ) => {

        setMovement(( movement )=>{
            return{
                ...movement,
                description:value,
            }
        });

    }

    const addMovementHandler = () => {

        if ( movement.description !== '' && movement.amount >= 0 
            || movement.amount <= 0 && movement.dateMovement !== '' ) {

            onMovementAdd( movement );
            setMovement(( movement )=>{
                return{
                    ...movement,
                    description: '',
                    amount: 0,
                    dateMovement: '',
                }
            });
            setBalance(parseInt(balance) + parseInt(movement.amount));
            setShowMovementInput( false )

        } else {
            alert(`Ejemplo: 
            Fecha: 13/02/2022
            Importe: 56
            Descripción: Un par de zapatos`)
        }
    }

    const editMovementHandler = () => {

        if ( movement.description !== '' && movement.amount >= 0 
            || movement.amount <= 0 && movement.dateMovement !== '' ) {

            modifyMovementHandler(movement);
            setMovement(( movement )=>{
                return{
                    ...movement,
                    description: '',
                    amount: 0,
                    dateMovement: '',
                }
            });
            setShowMovementInput( false )

        } else {
            alert(`Ejemplo: 
            Fecha: 13/02/2022
            Importe: 56
            Descripción: Un par de zapatos`)
        }
    }

    return (
        <Modal visible = { showMovementInput } animationType = { 'fade' } transparent = { true }>
            <ImageBackground source = { require("../../assets/fondo03.jpg") } resizeMode = "cover">
                <View style = { styles.orderHigher }>
                    <View style = { styles.firstBlock }>
                        <TextInput
                            style = { styles.firstBlockStyles }
                            placeholder = 'Fecha: Ej(24/11/2022)'
                            maxLength = { 10 } 
                            keyboardType = "text"
                            onChangeText = { changeDateMovementHandler }
                        />
                        <TextInput
                            style = { styles.firstBlockStyles }
                            placeholder = 'Importe: Ej(50)'
                            keyboardType = "numeric"
                            onChangeText = { changenAmountHandler }
                        />
                    </View>
                    <View style = { styles.secondBlock }>
                        <TextInput
                            style = { styles.textDescription }
                            placeholder = 'Descripción Ej(Par de Zapatos)'
                            keyboardType = "text"
                            onChangeText = { edit ? changenDescriptionHandler : changenDescriptionHandlerId }
                        />
                        <View style = { styles.enterButton }>
                            <Button 
                                title = { edit ? "Guardar" : "Ingresar" }
                                onPress = { edit ? editMovementHandler : addMovementHandler }
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </Modal>
    )
}

const styles = StyleSheet.create({

    orderHigher: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 245
    },

    firstBlock: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 30,
        padding: 5,
        backgroundColor: palette.light.fourthColor
    },

    secondBlock: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        height: 120,
        padding: 5,
        marginTop: -12,
        backgroundColor: palette.light.fourthColor
    },

    firstBlockStyles: {
        flex: 1,
        paddingLeft: 5,
        margin: 10,
        height: 45,
        backgroundColor: palette.light.letterColor
    },

    textDescription: {
        paddingLeft: 5,
        width: '65%',
        height: 50,  
        margin: 5,
        backgroundColor: palette.light.letterColor
    },

    enterButton: {
        marginTop: 6,
        marginBottom: 10
    }

});

export default MovementInput