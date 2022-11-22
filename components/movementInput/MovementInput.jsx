import { Button, ImageBackground, Modal, StyleSheet, TextInput, View } from 'react-native';

const MovementInput = ({ 
    movement,
    setMovement,
    onMovementAdd,
    showMovementInput, 
    setShowMovementInput }) => {

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

    const addProductHandler = () => {

        if ( movement.description !== '' && movement.amount >= 0 && movement.dateMovement !== '' ) {
            onMovementAdd( movement );
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
            <ImageBackground source = { require("../../assets/entrada.jpg") } resizeMode = "cover">
                <View style = { styles.orderHigher }>
                    <View style = { styles.firstBlock }>
                        <TextInput
                            style = { styles.firstBlockStyles }
                            placeholder = 'Fecha'
                            keyboardType = "text"
                            onChangeText = { changeDateMovementHandler }
                        />
                        <TextInput
                            style = { styles.firstBlockStyles }
                            placeholder = 'Importe'
                            keyboardType = "numeric"
                            onChangeText = { changenAmountHandler }
                        />
                    </View>
                    <View style = { styles.secondBlock }>
                        <TextInput
                            style = { styles.textDescription }
                            placeholder = 'Descripción'
                            keyboardType = "text"
                            onChangeText = { changenDescriptionHandler }
                        />
                        <View style = { styles.enterButton }>
                            <Button 
                                title = "Ingresar"
                                onPress = { addProductHandler }
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
        backgroundColor: '#424B7D'
    },

    secondBlock: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        height: 120,
        padding: 5,
        marginTop: -12,
        backgroundColor: '#424B7D'
    },

    firstBlockStyles: {
        flex: 1,
        textAlign: 'center',
        margin: 10,
        height: 45,
        backgroundColor: '#fff'
    },

    textDescription: {
        textAlign: 'center',
        width: '60%',
        height: 50,  
        margin: 5,
        backgroundColor: '#fff'
    },

    enterButton: {
        marginTop: 6,
        marginBottom: 10
    }

});

export default MovementInput