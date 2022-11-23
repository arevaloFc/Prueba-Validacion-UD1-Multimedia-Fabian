import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { palette } from '../../constants/theme';

const TotalBalance = ({ balance }) => {

    let colorBalance = palette.light.colorWhite

    if ( balance < 0 ) {
        colorBalance = palette.light.colorNegativeBalance
    } else if( balance > 0) {
        colorBalance = palette.light.colorPositiveBalance
    } else {
        colorBalance = palette.light.colorWhite
    }

    return (
        <View style = { styles.containerTotalBalance }>
            <ImageBackground 
                resizeMode = "cover" 
                style = { styles.imageBackground }
                source = { require("../../assets/paisaje01.jpg") } 
            >
                <Text style = { styles.textBalance }> Balance </Text>
                <Text style = { [ styles.totalMoney ,{ backgroundColor: colorBalance }] }> { balance } € </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    containerTotalBalance: {
        width: '100%',
        height: 200,
        marginBottom: 20
    },

    imageBackground: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18
    },

    textBalance: {
        textAlign: 'right',
        marginBottom: 10,
        fontSize: palette.light.letterSizeMore,
        fontWeight: palette.light.boldLetter,
        color: palette.light.colorWhite
    },

    totalMoney: {
        textAlign: 'center',
        width: '40%',
        padding: 6,
        fontSize: palette.light.letterSize
    }

});

export default TotalBalance