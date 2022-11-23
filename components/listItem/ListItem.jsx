import { Image, StyleSheet, Text, View , Pressable} from 'react-native';
import { palette } from '../../constants/theme';

const ListItem = ({ setEdit, movements, deleteMovement, setShowMovementInput }) => {

    const showToEdit = () => {
        setEdit( true );
        setShowMovementInput( true );
    }

    let gastoOIngreso = movements.amount
    let textGastoOIngreso = ''

    if (gastoOIngreso < 0) {
        textGastoOIngreso = 'Gasto:'
    } else if ( gastoOIngreso > 0 ){
        textGastoOIngreso = 'Ingreso:'
    } else {
        textGastoOIngreso = 'Importe:'
    }

    return (
        <View style={styles.containerList} >
            <View style={styles.contentOrder}>
                <View style={styles.contentBlock}>
                    <Text style={ styles.date }>Fecha: { movements.dateMovement } </Text>
                    <Text style={ styles.amount }>{ textGastoOIngreso } { movements.amount } € </Text>
                    <Text style={ styles.description }>Descripción: { movements.description } </Text>
                </View>
                <View>
                    <Pressable onPress = { showToEdit} style = {({ pressed }) => [
                        {
                            backgroundColor: pressed
                            ?  palette.light.primaryColor
                            :  palette.light.secondColor
                        },
                        styles.pressableStyle
                    ]}>
                        <Image style = { styles.icon } source = { require('../../assets/IconEditar.png') } />
                    </Pressable>
                    <Pressable onPress = { () => deleteMovement(movements) } style = {({ pressed }) => [
                        {
                            backgroundColor: pressed
                            ?  palette.light.colorSecondButtonDelete
                            :  palette.light.colorButtonDelete
                        },
                        styles.pressableStyle
                    ]}>
                        <Image style = { styles.icon } source = { require('../../assets/IconEliminar.png') } />
                    </Pressable>
                </View>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({

    containerList:{
        alignItems: 'center',
        width:'100%', 
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10
    },

    contentOrder: {
        flexDirection: 'row'
    },

    contentBlock:{
        flexDirection: 'column',
        width: '80%',
        borderWidth: 1,
        backgroundColor: palette.light.colorWhite,
        borderRadius: 5
    },

    date:{
        width: '80%',
        margin: 5,
        padding: 10,
        borderBottomWidth: 1,
        fontWeight: palette.light.boldLetter,
        borderColor: palette.light.fifthColor
    },

    amount:{
        width: '80%',
        margin: 5,
        padding: 10,
        borderBottomWidth: 1,
        fontWeight: palette.light.boldLetter,
        borderColor: palette.light.fifthColor
    },

    description:{
        width: '80%',
        margin: 5,
        padding: 10
    },

    pressableStyle: {
        borderRadius: 20,
        marginBottom: 2,
        marginLeft: 2
    },

    icon: {
        width: 25,
        height: 25,
        margin: 5,
    },

});

export default ListItem