import { Pressable, StyleSheet, Text } from 'react-native';
import { palette } from '../../constants/theme';

const ButtonFab = () => {

    return (
        <Pressable style = {({ pressed }) => [
            {
                backgroundColor: pressed
                ?  palette.light.secondaryLight
                :  palette.light.secondaryDark
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
        fontSize: 35,
        borderRadius: 50
    },

});

export default ButtonFab