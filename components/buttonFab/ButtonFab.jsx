import { Pressable, StyleSheet, Text } from 'react-native';
import { palette } from '../../constants/theme';

const ButtonFab = ({ setShowMovementInput }) => {

    return (
        <Pressable onPress={() => {setShowMovementInput(true)}} style = {({ pressed }) => [
            {
                backgroundColor: pressed
                ?  palette.light.primaryColor
                :  palette.light.secondColor
            },
            styles.pressableStyle
        ]}>
            <Text style = { styles.newMovement }> + </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    pressableStyle: {
        position: 'absolute',
        right: 50,
        bottom: 50,
        borderRadius: 50
    },

    newMovement: {
        textAlign: 'center',
        width: 50,
        height: 50,
        fontSize: palette.light.letterExSizeMore,
        borderRadius: 50
    },

});

export default ButtonFab