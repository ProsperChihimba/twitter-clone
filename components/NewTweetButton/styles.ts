import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        bottom: 25,
        right: 25,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles