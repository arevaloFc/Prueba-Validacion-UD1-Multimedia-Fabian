import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ setEdit, movements, deleteMovement }) => {

    return (
        <View style={styles.containerList} >
            <View style={styles.contentBlock}>
                <Text style={ styles.date }>Fecha: { movements.dateMovement } </Text>
                <Text style={ styles.amount }>Importe: { movements.amount } € </Text>
                <Text style={ styles.description }>Descripción: { movements.description } </Text>
                <Text onPress={() => deleteMovement(movements)} > Eliminar </Text>
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

    contentBlock:{
        flexDirection: 'column',
        width: '80%',
        borderWidth: 1,
        borderColor: '#A9A9A9',
        backgroundColor: 'white'
    },

    date:{
        width: '80%',
        margin: 5,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#A9A9A9'
    },

    amount:{
        width: '80%',
        margin: 5,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#A9A9A9'
    },

    description:{
        width: '80%',
        margin: 5,
        padding: 10
    },

});

export default ListItem