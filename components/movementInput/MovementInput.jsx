import { ImageBackground, Modal, StyleSheet} from 'react-native';

const MovementInput = () => {

    return (
        <Modal animationType = { 'fade' } transparent = { true }>
            <ImageBackground source={require("../../assets/entrada.jpg")} 
                resizeMode="cover" 
                style={styles.imageBackground}>

            </ImageBackground>
        </Modal>
    )
}

const styles = StyleSheet.create({


});

export default MovementInput