import { Button, ImageBackground, Modal, StyleSheet, TextInput, View } from 'react-native';

const MovementInput = ({ 
    setMovement,
    showMovementInput, 
    setShowMovementInput }) => {

    const changenDescriptionHandler = ( value ) => {

        setMovement(( movement )=>{
            return{
                ...movement,
                description:value,
            }
        });

    }

    const ocultarModal = () => {
        setShowMovementInput( false )
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
                        />
                        <TextInput
                            style = { styles.firstBlockStyles }
                            placeholder = 'Importe'
                            keyboardType = "numeric"
                        />
                    </View>
                    <View style = { styles.secondBlock }>
                        <TextInput
                            style = { styles.textDescription }
                            placeholder = 'Descripción'
                            keyboardType = "text"
                            onChangeText={changenDescriptionHandler}
                        />
                        <View style = { styles.enterButton }>
                            <Button 
                                title = "Ingresar"
                                onPress = { ocultarModal }
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