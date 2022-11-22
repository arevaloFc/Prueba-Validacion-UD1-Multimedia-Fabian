import { Pressable, StyleSheet, Text } from 'react-native';

const ButtonFab = () => {

    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? '#BBD2F2'
                : '#5694EF'
            },
            styles.pressableStyle
        ]}>
            <Text style={styles.newMovement}>+</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    pressableStyle: {
        borderRadius: 50,
        position: 'absolute',
        right: 50,
        bottom: 50
    },

    newMovement: {
        width: 50,
        height: 50,
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 35
    },

});

export default ButtonFab