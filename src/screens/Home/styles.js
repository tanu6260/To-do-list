import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    innerContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: width * 0.94, 
        marginTop:height*0.03
    },
   
})

export default styles;