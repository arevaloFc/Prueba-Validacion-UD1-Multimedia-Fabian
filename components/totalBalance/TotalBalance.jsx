import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const TotalBalance = () => {

    return (
        <View>
            <ImageBackground 
                source = { require("../../assets/paisaje01.jpg") } 
                resizeMode="cover"
            >
                <Text>Balance</Text>
                <Text> €</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default TotalBalance