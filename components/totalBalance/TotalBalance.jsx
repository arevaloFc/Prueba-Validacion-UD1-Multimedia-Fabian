import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const TotalBalance = ({ balance }) => {

    return (
        <View style = { styles.containerTotalBalance }>
            <ImageBackground 
                resizeMode = "cover" 
                style = { styles.imageBackground }
                source = { require("../../assets/paisaje01.jpg") } 
            >
                <Text style = { styles.textBalance }> Balance </Text>
                <Text style = { styles.totalMoney }> {balance} € </Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    totalMoney: {
        textAlign: 'center',
        width: '40%',
        padding: 6,
        fontSize: 18,
        backgroundColor: 'white'
    }

});

export default TotalBalance