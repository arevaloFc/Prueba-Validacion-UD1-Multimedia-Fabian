import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ movements }) => {

    return (
        <View>
            <View>
                <Text>Fecha: {movements.dateMovement}</Text>
                <Text>Importe: {movements.amount} €</Text>
                <Text>Descripción: {movements.description}</Text>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({


});

export default ListItem